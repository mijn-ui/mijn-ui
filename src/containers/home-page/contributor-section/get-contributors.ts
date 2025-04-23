import axios from "axios"

type Contributor = {
  id: number
  login: string
  avatar_url: string
  html_url: string
  contributions: number
  type: "User" | "Bot" | string
}

const REPOS = [
  "mijn-ui/mijn-ui-react",
  "mijn-ui/mijn-ui-tailwind",
  "mijn-ui/mijn-ui-tall",
]

const EXCLUDED_USERS = ["turbobot-temp"]

const MAX_CONTRIBUTORS = 50

// Some of the contributors from mijnui haven't made any commits to the existing repos.
// So, I am just adding this to make sure their names are included in the contributors section.
const CORE_CONTRIBUTORS = [
  {
    id: "1",
    name: "sannkoko ",
    avatar: "/images/contributors/sann_ko_ko.jpg",
    link: "https://github.com/sannkoko",
  },
  {
    id: "2",
    name: "Hein Htoo Htoo Kyaw",
    link: "#",
  },
  {
    id: "3",
    name: "kyawsaw",
    link: "https://github.com/kyawsaw",
    avatar: "/images/contributors/kyaw_saw_aung.jpg",
  },
]

const CORE_GITHUB_USERNAMES = CORE_CONTRIBUTORS.map(
  (contributor) => contributor.name,
).filter((username) => username.length > 0)

/**
 * Fetches contributors from a GitHub repository
 */
const fetchRepoContributors = async (repo: string): Promise<Contributor[]> => {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${repo}/contributors?per_page=100`,
      {
        headers: {
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          }),
        },
      },
    )
    return response.data
  } catch (error) {
    console.error(`Error fetching contributors for ${repo}:`, error)
    return []
  }
}

export async function getGitHubContributors() {
  // Fetch contributors from all repos in parallel
  const contributorsArrays = await Promise.all(
    REPOS.map((repo) => fetchRepoContributors(repo)),
  )

  // Merge all contributors into a single array and filter by type
  const allContributors = contributorsArrays
    .flat()
    .filter(
      (contributor) =>
        contributor.type === "User" &&
        !EXCLUDED_USERS.includes(contributor.login) &&
        !CORE_GITHUB_USERNAMES.includes(contributor.login),
    )

  // Deduplicate contributors by GitHub user ID
  const uniqueContributorsMap = new Map<number, Contributor>()

  allContributors.forEach((contributor) => {
    if (uniqueContributorsMap.has(contributor.id)) {
      const existing = uniqueContributorsMap.get(contributor.id)!
      uniqueContributorsMap.set(contributor.id, {
        ...existing,
        contributions: existing.contributions + contributor.contributions,
      })
    } else {
      uniqueContributorsMap.set(contributor.id, contributor)
    }
  })

  // Convert map back to array and sort by contribution count (highest first)
  const repoContributors = Array.from(uniqueContributorsMap.values())
    .sort((a, b) => b.contributions - a.contributions)
    .slice(0, MAX_CONTRIBUTORS)
    .map((contributor) => ({
      name: contributor.login,
      avatar: contributor.avatar_url,
      link: contributor.html_url,
      contributions: `${contributor.contributions} contributions`,
    }))

  return [...CORE_CONTRIBUTORS, ...repoContributors]
}
