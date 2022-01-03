import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoList from './component/video_list/video_list';
import VideoItem from './component/video_item/video_item';
import Header from './component/header/header';
import SideBar from './component/side_bar/side_bar';

function App() {
  return (
    <>
    <Header />
    <SideBar />
    <VideoList />
    <VideoItem />
    </>
  );
}

export default App;
