import { Roboto } from "next/font/google"

import Bio from "./bio/page"
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})
export default function Home() {

  return (
    <main className="home_container" >
      <Bio />
    </main>
  )
}
