import {
  HomeIcon,
  PuzzlePieceIcon,
  Square2StackIcon,
} from "@heroicons/react/24/outline";

export const NAVIGATION = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  {
    name: "Basic Strategy",
    href: "/basic-strategy",
    icon: Square2StackIcon,
  },
  {
    name: "Complex Strategy",
    href: "/complex-strategy",
    icon: PuzzlePieceIcon,
  },
];


export const TOOLS_MENU = [
  { id: 1, name: 'Provider', href: '/provider', initial: 'P', current: false },
  { id: 2, name: 'Followers', href: '/followers', initial: 'F', current: false },
]