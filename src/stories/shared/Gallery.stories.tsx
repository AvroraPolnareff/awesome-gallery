import React from "react";
import {Meta} from "@storybook/react";
import {Gallery, GalleryProps, Photo} from "../../components/shared/Gallery";
import {Story} from "@storybook/react/dist/client/preview/types-6-0";
import {Wrapper} from "../Wrapper";

export default {
  title: "shared/Gallery",
  component: Gallery
} as Meta

const Template: Story<GalleryProps> = (args) => <Wrapper><Gallery {...args}/></Wrapper>

export const Default = Template.bind({})
Default.args = {
  photos: Array(10).fill({}).map(_ => randomPhoto() as Photo)
}

function randomPhoto () {
  const random =Math.floor(Math.random() * 5)
  console.log(random)
  switch (random){
    case 0:
      return {
        id: "1",
        title: "Chewy",
        src: "https://source.unsplash.com/grzczyieFUw"
      }
    case 1:
      return {
        id: "2",
        title: "Forest",
        src: "https://source.unsplash.com/2ShvY8Lf6l0"
      }
    case 2:
      return {
        id: "3",
        title: "Crashing wave",
        src: "https://source.unsplash.com/0fjRZf08HJQ"
      }
    case 3:
      return {
        id: "4",
        title: "Karlsruhe, Deutschland",
        src: "https://source.unsplash.com/75-aDN68ZJE"
      }
    case 4:
      return {
        id: "5",
        title: "Cincinnati, OH, USA",
        src: "https://source.unsplash.com/IxfYmmUIYeM"
      }
    default:
      return {
      id: "5",
      title: "Cincinnati, OH, USA",
      src: "https://source.unsplash.com/IxfYmmUIYeM"
    }
  }
}
