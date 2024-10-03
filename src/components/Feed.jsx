import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post
        avatarBgColor="red"
        avatarLabel="R"
        title="Shrimp and Chorizo Paella"
        subheader="June 20, 2024"
        image="https://blog.blue-style.cz/wp-content/uploads/2021/03/spanelska-specialita-768x512.jpg"
        alt="Paella Dish"
        description=" This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the
              mussels, if you like."
        favoriteIconColor="Red"
      />
      <Post
        avatarBgColor="blue"
        avatarLabel="AS"
        title="Stargazing and the Universe"
        subheader="June 20, 2024"
        image="https://th.bing.com/th/id/R.c8b863d7d50e05c695a83651b3d9d178?rik=Sd7niYPBaCOu6Q&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fFree-Desktop-Starry-Night-Wallpaper-Images-Photos.jpg&ehk=hlsJKp9OG4aJ1FNGFGy%2f68d2Ew1RDBMgQF3ragciCoA%3d&risl=&pid=ImgRaw&r=0"
        alt="Stargazing"
        description="Spent the night stargazing and marveling at the vastness of the universe. It’s humbling to think we’re just a tiny part of something so infinite and beautiful."
        favoriteIconColor="Red"
      />
      <Post
        avatarBgColor="black"
        avatarLabel="Q"
        title="Quote of The Day"
        subheader="June 20, 2024"
        image="https://th.bing.com/th/id/R.1a994928afa7866db6782dae8060708f?rik=CmK1xi3XIR64EQ&riu=http%3a%2f%2fhdfreewallpaper.net%2fwp-content%2fuploads%2f2015%2f09%2fmotivation-motivational-quotes-poster-wallpaper-free-hd-for-desktop.jpg&ehk=y4xS0fJstKQXAc8yWtX2LuYVSIj5UZsxyiYMM64%2boVM%3d&risl=&pid=ImgRaw&r=0"
        alt="Motivation"
        description="In order to succeed, we must first believe that we can."
        favoriteIconColor="Red"
      />
      <Post
        avatarBgColor="green"
        avatarLabel="J"
        title="Trip to NewYork"
        subheader="August 15, 2024"
        image="https://th.bing.com/th/id/OIP.5n_lTh5552iAeos02SrJ5gHaE8?rs=1&pid=ImgDetMain"
        alt="New York"
        description="Just touched down in NYC and the energy here is unreal! Ready to explore the city that never sleeps, from iconic landmarks to hidden gems."
        favoriteIconColor="Red"
      />
      <Post
        avatarBgColor="brown"
        avatarLabel="H"
        title="History Unveiled"
        subheader="August 15, 2024"
        image="https://th.bing.com/th/id/R.0c0b92f5ed63ab2370b7b8ae62e03b04?rik=mc8HwtlOBPWbpw&riu=http%3a%2f%2ftravelhdwallpapers.com%2fwp-content%2fuploads%2f2014%2f02%2fColosseum-11.jpg&ehk=1mdswAyhLQq%2bmoSbumc%2fdPd03zXyrjWqp9bbmSd8Aag%3d&risl=&pid=ImgRaw&r=0"
        alt="Colosseum"
        description="The Colosseum in Rome stands as a symbol of ancient engineering and gladiatorial grandeur. Once home to epic battles and public spectacles, this iconic amphitheater echoes the power and culture of the Roman Empire. Today, it serves as a reminder of history's might and humanity's resilience."
        favoriteIconColor="Red"
      />
      <Post
        avatarBgColor="purple"
        avatarLabel="T"
        title="Tech Insights"
        subheader="August 15, 2024"
        image="https://th.bing.com/th/id/OIP.NzbhlJqpVy6v0hIY5ExkCAHaEH?rs=1&pid=ImgDetMain"
        alt="Hacking"
        description="The future of hacking will see an increase in AI-driven cyberattacks, making them more sophisticated and difficult to detect. Quantum computing will challenge traditional encryption methods, leading to a cybersecurity arms race. Ethical hacking and advanced threat intelligence will become crucial in defending against rapidly evolving cyber threats."
        favoriteIconColor="Red"
      />
    </Box>
  );
};

export default Feed;
