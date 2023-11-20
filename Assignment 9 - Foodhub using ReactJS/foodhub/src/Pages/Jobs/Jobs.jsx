import React from 'react'
import Card from '../../Components/Card'
import Navbar from '../Navbar/Navbar'

function Jobs() {
  const imageUrls = [
    {
        id: 1,
        url: "undraw_design_tools_-42-tf.svg",
        title: "UI/UX Developer",
    },
    {
        id: 2,
        url: "undraw_futuristic_interface_re_0cm6.svg",
        title: "SDE 2 Frontend engineer"
    },
    {
        id: 3,
        url: "undraw_mobile_development_re_wwsn.svg",
        title: "Frontend developer"
    },
    {
        id: 4,
        url: "undraw_content_creator_re_pt5b.svg",
        title: "Content Creator"
    },
    {
        id: 5,
        url: "undraw_predictive_analytics_re_wxt8.svg",
        title: "Sales Associate"
    }
];
  return (
    <div>
      <Navbar title="jobs" />
      <div className="games-container">
        {imageUrls.map(imageUrl => (<Card
          key={imageUrl.id}
          src={imageUrl.url}
          title={imageUrl.title}
          buttonText="APPLY"
          imageStyle="150px"
          galleryStyle="80%"
        />))}
      </div>
    </div>
  )
}

export default Jobs
