import React from 'react'
import { IoLink } from "react-icons/io5";
import { SiFandom, SiWikipedia, SiFacebook, SiTwitter, SiTwitch, SiInstagram, SiYoutubegaming, SiApplearcade, SiAppstore, SiGoogleplay, SiSteam, SiReddit, SiItchdotio, SiEpicgames, SiGogdotcom, SiDiscord } from "react-icons/si";
import './external-links.scss'

function ExternalLinks({ websites }) {
  const sitesMap = websites.sort((a, b) => a.category - b.category).map((site) => {
    switch(site.category) {
      case 1: {
        return (
          <span key={site.id}>
            <IoLink style={{color: 'var(--layer_300)'}}/>
            <a href={site.url} target='_blank' rel='noreferrer'>
              Official Website
            </a>
          </span>
        ) 
      }
      case 2: {
        return (
          <span key={site.id}>
            <SiFandom style={{ color: '#00D6D9'}}/>
            <a href={site.url} target='_blank' rel='noreferrer'>
              Wikia
            </a>
          </span>
        ) 
      }
      case 3: {
        return (
          <span key={site.id}>
            <SiWikipedia/>
            <a href={site.url} target='_blank' rel='noreferrer'>
              Wikipedia
            </a>
          </span>
        ) 
      }
      case 4: {
        return (
          <span key={site.id}>
            <SiFacebook style={{ color: '#1778F2'}}/>
            <a href={site.url} target='_blank' rel='noreferrer'>
              Facebook
            </a>
          </span>
        ) 
      }
      case 5: {
        return (
          <span key={site.id}>
            <SiTwitter style={{ color: '#1DA1F2'}}/>
            <a href={site.url} target='_blank' rel='noreferrer'>
              Twitter
            </a>
          </span>
        ) 
      }
      case 6: {
        return (
          <span key={site.id}>
            <SiTwitch style={{ color: '#6441A4'}}/>
            <a href={site.url} target='_blank' rel='noreferrer'>
              Twitch
            </a>
          </span>
        ) 
      }
      case 8: {
        return (
          <span key={site.id}>
            <SiInstagram style={{ color: '#DD2A7B'}}/>
            <a href={site.url} target='_blank' rel='noreferrer'>
              Instagram
            </a>
          </span>
        ) 
      }
      case 9: {
        return (
          <span key={site.id}>
            <SiYoutubegaming style={{color: '#FF0000'}}/>
            <a href={site.url} target='_blank' rel='noreferrer'>
              YouTube
            </a>
          </span>
        ) 
      }
      case 10: {
        return (
          <span key={site.id}>
            <SiAppstore style={{ color: '#1C9CF6'}}/>
            <a href={site.url} target='_blank' rel='noreferrer'>
              Iphone
            </a>
          </span>
        ) 
      }
      case 11: {
        return (
          <span key={site.id}>
            <SiApplearcade style={{ color: '#FF713C'}}/>
            <a href={site.url} target='_blank' rel='noreferrer'>
              Ipad
            </a>
          </span>
        ) 
      }
      case 12: {
        return (
          <span key={site.id}>
            <SiGoogleplay style={{color: '#1967D2'}}/>
            <a href={site.url} target='_blank' rel='noreferrer'>
              Android
            </a>
          </span>
        ) 
      }
      case 13: {
        return (
          <span key={site.id}>
            <SiSteam/>
            <a href={site.url} target='_blank' rel='noreferrer'>
              Steam
            </a>
          </span>
        ) 
      }
      case 14: {
        return (
          <span key={site.id}>
            <SiReddit style={{ color: '#FF4301'}}/>
            <a href={site.url} target='_blank' rel='noreferrer'>
              Reddit
            </a>
          </span>
        ) 
      }
      case 15: {
        return (
          <span key={site.id}>
            <SiItchdotio/>
            <a href={site.url} target='_blank' rel='noreferrer'>
              Itch
            </a>
          </span>
        ) 
      }
      case 16: {
        return (
          <span key={site.id}>
            <SiEpicgames/>
            <a href={site.url} target='_blank' rel='noreferrer'>
              Epic Games
            </a>
          </span>
        ) 
      }
      case 17: {
        return (
          <span key={site.id}>
            <SiGogdotcom/>
            <a href={site.url} target='_blank' rel='noreferrer'>
              GOG
            </a>
          </span>
        ) 
      }
      case 18: {
        return (
          <span key={site.id}>
            <SiDiscord style={{color: '#7289DA'}}/>
            <a href={site.url} target='_blank' rel='noreferrer'>
              Discord
            </a>
          </span>
        ) 
      }
      default:
        return null
    }
  })

  return (
    <div className='external'>
      <h2>External Links</h2>
      <div className='links'>
        {sitesMap}
      </div>
    </div>
  )
}

export default ExternalLinks