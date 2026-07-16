import Link from "next/link";
import { profile } from "@/data/profile";

export function Header() {
  return <header className="site-header"><Link href="/" className="wordmark">ÁG<span>.</span></Link><nav aria-label="Navegación principal"><a href="/#work">Work</a><a href="/#experience">Experience</a><a href="/#about">About</a><a href="/#contact">Contact</a></nav><a className="header-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></header>;
}
