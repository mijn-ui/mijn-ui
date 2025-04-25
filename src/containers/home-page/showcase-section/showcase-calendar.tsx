import React from "react"

const ShowcaseCalendar = () => {
  return (
    <div className="max-h-full max-w-52 overflow-hidden rounded-lg border border-border bg-card p-2">
      <div className="relative flex flex-col sm:flex-row ">
        {/* --------------------------- DATE PICKER NAVBAR ---------------------------  */}
        <nav>
          <button
            tabIndex={-1}
            type="button"
            className="absolute left-1 top-0 z-10 inline-flex size-6 items-center justify-center gap-1 rounded-md border border-border bg-transparent p-0 text-xxs opacity-50 transition-colors duration-150 hover:bg-accent hover:text-accent-foreground hover:opacity-100 active:brightness-95"
            aria-label="Go to the Previous Month"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            tabIndex={-1}
            type="button"
            className="absolute right-1 top-0 z-10 inline-flex size-6 items-center justify-center gap-1 rounded-md border border-border bg-transparent p-0 text-xxs opacity-50 transition-colors duration-150 hover:bg-accent hover:text-accent-foreground hover:opacity-100 active:brightness-95"
            aria-label="Go to the Next Month"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </nav>
        {/* /* ---------------------------- DATE PICKER TITLE --------------------------- * / */}
        <div>
          <div className="relative flex items-center justify-center py-2">
            <span className="text-xxs font-medium" role="status">
              October 2024
            </span>
          </div>
          {/* /* ---------------------------- DATE PICKER TABLE --------------------------- * / */}
          <table
            role="grid"
            aria-label="October 2024"
            className="w-full border-collapse space-y-1"
          >
            {/* Date Picker Table Caption */}
            <thead>
              <tr className="flex">
                <th
                  aria-label="Sunday"
                  className="flex size-6 items-center justify-center text-xxs font-normal text-muted-foreground"
                  scope="col"
                >
                  Su
                </th>
                <th
                  aria-label="Monday"
                  className="flex size-6 items-center justify-center text-xxs font-normal text-muted-foreground"
                  scope="col"
                >
                  Mo
                </th>
                <th
                  aria-label="Tuesday"
                  className="flex size-6 items-center justify-center text-xxs font-normal text-muted-foreground"
                  scope="col"
                >
                  Tu
                </th>
                <th
                  aria-label="Wednesday"
                  className="flex size-6 items-center justify-center text-xxs font-normal text-muted-foreground"
                  scope="col"
                >
                  We
                </th>
                <th
                  aria-label="Thursday"
                  className="flex size-6 items-center justify-center text-xxs font-normal text-muted-foreground"
                  scope="col"
                >
                  Th
                </th>
                <th
                  aria-label="Friday"
                  className="flex size-6 items-center justify-center text-xxs font-normal text-muted-foreground"
                  scope="col"
                >
                  Fr
                </th>
                <th
                  aria-label="Saturday"
                  className="flex size-6 items-center justify-center text-xxs font-normal text-muted-foreground"
                  scope="col"
                >
                  Sa
                </th>
              </tr>
            </thead>
            {/* Date Picker Table Numbers */}
            <tbody>
              <tr className="mt-0.5 flex w-full">
                <td className="day-outside inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal text-muted-foreground opacity-50 transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95">
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Sunday, September 29th, 2024"
                  >
                    29
                  </button>
                </td>
                <td
                  className="day-outside inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal text-muted-foreground opacity-50 transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-09-30"
                  data-month="2024-09"
                  data-outside="true"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Monday, September 30th, 2024"
                  >
                    30
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-01"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Tuesday, October 1st, 2024"
                  >
                    1
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-02"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Wednesday, October 2nd, 2024"
                  >
                    2
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-03"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Thursday, October 3rd, 2024"
                  >
                    3
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-04"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Friday, October 4th, 2024"
                  >
                    4
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-05"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Saturday, October 5th, 2024"
                  >
                    5
                  </button>
                </td>
              </tr>
              <tr className="mt-0.5 flex w-full">
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-06"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Sunday, October 6th, 2024"
                  >
                    6
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-07"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Monday, October 7th, 2024"
                  >
                    7
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-08"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Tuesday, October 8th, 2024"
                  >
                    8
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-09"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Wednesday, October 9th, 2024"
                  >
                    9
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-10"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Thursday, October 10th, 2024"
                  >
                    10
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-11"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Friday, October 11th, 2024"
                  >
                    11
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-12"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Saturday, October 12th, 2024"
                  >
                    12
                  </button>
                </td>
              </tr>
              <tr className="mt-0.5 flex w-full">
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-13"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Sunday, October 13th, 2024"
                  >
                    13
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-14"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Monday, October 14th, 2024"
                  >
                    14
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-15"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Tuesday, October 15th, 2024"
                  >
                    15
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-16"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Wednesday, October 16th, 2024"
                  >
                    16
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-17"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Thursday, October 17th, 2024"
                  >
                    17
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-18"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Friday, October 18th, 2024"
                  >
                    18
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-19"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Saturday, October 19th, 2024"
                  >
                    19
                  </button>
                </td>
              </tr>
              <tr className="mt-0.5 flex w-full">
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-20"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Sunday, October 20th, 2024"
                  >
                    20
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md bg-primary p-0 text-xxs font-normaltext-primary-foreground text-primary-foreground transition-colors duration-150 hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground active:brightness-95"
                  data-day="2024-10-21"
                  data-today="true"
                  aria-selected="true"
                  data-selected="true"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Today, Monday, October 21st, 2024, selected"
                  >
                    21
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-22"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Tuesday, October 22nd, 2024"
                  >
                    22
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-23"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Wednesday, October 23rd, 2024"
                  >
                    23
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-24"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Thursday, October 24th, 2024"
                  >
                    24
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-25"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Friday, October 25th, 2024"
                  >
                    25
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-26"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Saturday, October 26th, 2024"
                  >
                    26
                  </button>
                </td>
              </tr>
              <tr className="mt-0.5 flex w-full">
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-27"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Sunday, October 27th, 2024"
                  >
                    27
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-28"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Monday, October 28th, 2024"
                  >
                    28
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-29"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Tuesday, October 29th, 2024"
                  >
                    29
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-30"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Wednesday, October 30th, 2024"
                  >
                    30
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-10-31"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Thursday, October 31st, 2024"
                  >
                    31
                  </button>
                </td>
                <td
                  className="day-outside inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal text-muted-foreground opacity-50 transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-11-01"
                  data-month="2024-11"
                  data-outside="true"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Friday, November 1st, 2024"
                  >
                    1
                  </button>
                </td>
                <td
                  className="day-outside inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 text-xxs font-normal text-muted-foreground opacity-50 transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95"
                  data-day="2024-11-02"
                  data-month="2024-11"
                  data-outside="true"
                >
                  <button
                    tabIndex={-1}
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    type="button"
                    aria-label="Saturday, November 2nd, 2024"
                  >
                    2
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ShowcaseCalendar
