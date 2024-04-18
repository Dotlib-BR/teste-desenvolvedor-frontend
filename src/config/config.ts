import { env } from "@/lib/env.mjs"

export const siteConfig = {
	name: "Bulário Eletrônico",
	authors: [
		{
			name: "whyleonardo",
			url: "https://github.com/whyleonardo"
		}
	],
	url: env.NEXT_PUBLIC_SITE_BASE_URL,
	ogImage: "",
	description: "",
	links: {
		github: "https://github.com/whyleonardo/next-shadcn-template",
		twitter: "",
		linkedin: ""
	}
}

export type SiteConfig = typeof siteConfig
