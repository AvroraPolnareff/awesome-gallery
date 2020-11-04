import {Album, AlbumsGallery, AlbumsGalleryProps} from "../../components/pages/AlbumsGallery";
import {Meta, Story} from "@storybook/react";
import React from "react";
import {Wrapper} from "../Wrapper";


export default {
  title: "pages/AlbumsGallery",
  component: AlbumsGallery
} as Meta

const Template: Story<AlbumsGalleryProps> = (args) => <Wrapper><AlbumsGallery {...args}/></Wrapper>

export const Default = Template.bind({})
Default.args = {
  albums: Array(10).fill({
    title: "Forest",
    photoCount: 50,
    cover: "https://source.unsplash.com/2ShvY8Lf6l0/800x599"
  } as Album)
}
