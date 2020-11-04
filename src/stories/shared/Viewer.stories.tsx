import React from "react";
import {Meta, Story} from "@storybook/react";
import {Viewer, ViewerProps} from "../../components/shared/Viewer";
import {Wrapper} from "../Wrapper";
import {Photo} from "../../components/shared/Gallery";
import {v4} from "uuid";

export default {
  title: "shared/Viewer",
  component: Viewer
} as Meta

const Template: Story<ViewerProps> = args => <Wrapper><Viewer {...args}/></Wrapper>

export const Default = Template.bind({})

const photos = Array(10).fill({}).map(_ => randomPhoto() as Photo)

Default.args = {
  photos: photos,
  clickedPhoto: photos[0]
}

function randomPhoto () {
  const random =Math.floor(Math.random() * 5)
  console.log(random)
  switch (random){
    case 0:
      return {
        id: v4(),
        title: "Chewy",
        src: "https://source.unsplash.com/grzczyieFUw"
      }
    case 1:
      return {
        id: v4(),
        title: "Forest",
        src: "https://source.unsplash.com/2ShvY8Lf6l0"
      }
    case 2:
      return {
        id: v4(),
        title: "Crashing wave",
        src: "https://source.unsplash.com/0fjRZf08HJQ"
      }
    case 3:
      return {
        id: v4(),
        title: "Karlsruhe, Deutschland",
        src: "https://source.unsplash.com/75-aDN68ZJE"
      }
    case 4:
      return {
        id: v4(),
        title: "Cincinnati, OH, USA",
        src: "https://source.unsplash.com/IxfYmmUIYeM"
      }
    default:
      return {
        id: v4(),
        title: "Cincinnati, OH, USA",
        src: "https://source.unsplash.com/IxfYmmUIYeM"
      }
  }
}
