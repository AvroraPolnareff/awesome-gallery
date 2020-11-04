import {Meta, Story} from "@storybook/react";
import React from "react";
import {AlbumCard, AlbumCardProps} from "../../components/shared/AlbumCard";
import {Wrapper} from "../Wrapper";


export default {
  title: "Shared/AlbumCard",
  component: AlbumCard,
} as Meta

const Template: Story<AlbumCardProps> = (args) => <Wrapper><AlbumCard {...args} /></Wrapper>

export const Default = Template.bind({})
Default.args = {
  imageSrc: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
  title: "Forest",
  count: 30
}
