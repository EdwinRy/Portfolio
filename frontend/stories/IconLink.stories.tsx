import type { Meta, StoryObj } from "@storybook/react";
import { GithubUrl, LinkedInUrl } from "@/app/constants";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { IconLink } from "@/app/_components/IconLink";

const meta: Meta<typeof IconLink> = {
    component: IconLink,
};

export default meta;
type Story = StoryObj<typeof IconLink>;

export const Linkedin: Story = {
    render: () => <IconLink icon={faLinkedin} href={LinkedInUrl}
                    title="Connect with me on LinkedIn!"/>,
};

export const Github: Story = {
    render: () => <IconLink icon={faGithub} href={GithubUrl}
                    title="Connect with me on LinkedIn!"/>,
};
