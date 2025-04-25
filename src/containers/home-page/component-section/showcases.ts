import React from "react"

type ShowcaseItem = {
  name: string
  link: string
  inprogress?: boolean
  component: React.LazyExoticComponent<React.FC>
}

type Showcase = {
  group: "tailwind" | "react" | "laravel"
  items: ShowcaseItem[]
}

export const Showcases: Showcase[] = [
  {
    group: "tailwind",
    items: [
      {
        name: "Tabs",
        link: "/tailwind/docs/components/tabs",
        component: React.lazy(() => import("./showcase-tabs")),
      },
      {
        name: "Pagination",
        link: "/tailwind/docs/components/pagination",
        component: React.lazy(() => import("./showcase-pagination")),
      },
      {
        name: "Stepper",
        link: "/tailwind/docs/components/stepper",
        component: React.lazy(() => import("./showcase-stepper")),
      },
      {
        name: "Calendar",
        link: "/tailwind/docs/components/calendar",
        component: React.lazy(() => import("./showcase-calendar")),
      },
      {
        name: "Select",
        link: "/tailwind/docs/components/select",
        component: React.lazy(() => import("./showcase-select")),
      },
      {
        name: "Alert Dialog",
        link: "/tailwind/docs/components/alert-dialog",
        component: React.lazy(() => import("./showcase-alert-dialog")),
      },
      {
        name: "Kanban",
        link: "/tailwind/blocks/kanban",
        component: React.lazy(() => import("./showcase-kanban")),
      },
      {
        name: "Table",
        link: "/tailwind/docs/components/table",
        component: React.lazy(() => import("./showcase-table")),
      },
      {
        name: "CalendarFull",
        link: "#",
        component: React.lazy(() => import("./showcase-calendar-full")),
        inprogress: true,
      },
    ],
  },
  {
    group: "react",
    items: [
      {
        name: "Tabs",
        link: "/react/docs/components/tabs",
        component: React.lazy(() => import("./showcase-tabs")),
      },
      {
        name: "Pagination",
        link: "/react/docs/components/pagination",
        component: React.lazy(() => import("./showcase-pagination")),
      },
      {
        name: "Stepper",
        link: "/react/docs/components/stepper",
        component: React.lazy(() => import("./showcase-stepper")),
        inprogress: true,
      },
      {
        name: "Calendar",
        link: "/react/docs/components/calendar",
        component: React.lazy(() => import("./showcase-calendar")),
      },
      {
        name: "Select",
        link: "/react/docs/components/select",
        component: React.lazy(() => import("./showcase-select")),
      },
      {
        name: "Alert Dialog",
        link: "/react/docs/components/alert-dialog",
        component: React.lazy(() => import("./showcase-alert-dialog")),
      },
      {
        name: "Kanban",
        link: "/react/blocks/kanban",
        component: React.lazy(() => import("./showcase-kanban")),
      },
      {
        name: "Table",
        link: "/react/docs/components/table",
        component: React.lazy(() => import("./showcase-table")),
      },
      {
        name: "CalendarFull",
        link: "/react/blocks/calendar-full",
        component: React.lazy(() => import("./showcase-calendar-full")),
      },
    ],
  },
  { group: "laravel", items: [] },
]
