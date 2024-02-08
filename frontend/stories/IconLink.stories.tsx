import type { Meta, StoryObj } from "@storybook/react";
import { GithubUrl, LinkedInUrl } from "@/app/constants";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { LinkIcon } from "@/app/_components/Interactive/LinkIcon";

const meta: Meta<typeof LinkIcon> = {
    component: LinkIcon,
};

export default meta;
type Story = StoryObj<typeof LinkIcon>;

export const Linkedin: Story = {
    render: () => <LinkIcon icon={faLinkedin} href={LinkedInUrl}
                    title="Connect with me on LinkedIn!"/>,
};

export const Github: Story = {
    render: () => <LinkIcon icon={faGithub} href={GithubUrl}
                    title="Connect with me on LinkedIn!"/>,
};
