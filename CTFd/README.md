# ![](https://github.com/CTFd/CTFd/blob/master/CTFd/themes/core/static/img/logo.png?raw=true)

![CTFd MySQL CI](https://github.com/CTFd/CTFd/workflows/CTFd%20MySQL%20CI/badge.svg?branch=master)
![Linting](https://github.com/CTFd/CTFd/workflows/Linting/badge.svg?branch=master)
[![MajorLeagueCyber Discourse](https://img.shields.io/discourse/status?server=https%3A%2F%2Fcommunity.majorleaguecyber.org%2F)](https://community.majorleaguecyber.org/)
[![Documentation Status](https://api.netlify.com/api/v1/badges/6d10883a-77bb-45c1-a003-22ce1284190e/deploy-status)](https://docs.ctfd.io)

## What is CTFd?

CTFd is a Capture The Flag framework focusing on ease of use and customizability. It comes with everything you need to run a CTF and it's easy to customize with plugins and themes.

![CTFd is a CTF in a can.](https://github.com/CTFd/CTFd/blob/master/CTFd/themes/core/static/img/scoreboard.png?raw=true)

## Features

- Create your own challenges, categories, hints, and flags from the Admin Interface
  - Dynamic Scoring Challenges
  - Unlockable challenge support
  - Challenge plugin architecture to create your own custom challenges
  - Static & Regex based flags
    - Custom flag plugins
  - Unlockable hints
  - File uploads to the server or an Amazon S3-compatible backend
  - Limit challenge attempts & hide challenges
  - Automatic bruteforce protection
- Individual and Team based competitions
  - Have users play on their own or form teams to play together
- Scoreboard with automatic tie resolution
  - Hide Scores from the public
  - Freeze Scores at a specific time
- Scoregraphs comparing the top 10 teams and team progress graphs
- Markdown content management system
- SMTP + Mailgun email support
  - Email confirmation support
  - Forgot password support
- Automatic competition starting and ending
- Team management, hiding, and banning
- Customize everything using the [plugin](https://docs.ctfd.io/docs/plugins/overview) and [theme](https://docs.ctfd.io/docs/themes/overview) interfaces
- Importing and Exporting of CTF data for archival
- And a lot more...

## Install

The easiest way to get started is to use a [Hosted CTFd instance](https://ctfd.io/pricing/).

For self-hosted installations, check out the [CTFd docs](https://docs.ctfd.io/) for [deployment options](https://docs.ctfd.io/docs/deployment/installation) and the [Getting Started](https://docs.ctfd.io/tutorials/getting-started/) guide.

Below is a summary of a few options for self-hosting CTFd:

### Docker

You can use Docker Compose with the following command from the source repository:

`docker compose up`

To use the auto-generated Docker images directly:

`docker run -p 8000:8000 -it ctfd/ctfd`

### Development

1. Install [uv](https://docs.astral.sh/uv/getting-started/installation/) and run `uv sync` to create a virtualenv with the dependencies installed.
   - You can also install into an existing environment with `pip install -r requirements.txt`, which is generated from `uv.lock`.
2. Modify [CTFd/config.ini](https://github.com/CTFd/CTFd/blob/master/CTFd/config.ini) to your liking.
3. Use `uv run serve.py` or `uv run flask run` in a terminal to drop into debug mode.

## Live Demo

https://demo.ctfd.io/

## Support

To get basic support, you can join the [MajorLeagueCyber Community](https://community.majorleaguecyber.org/): [![MajorLeagueCyber Discourse](https://img.shields.io/discourse/status?server=https%3A%2F%2Fcommunity.majorleaguecyber.org%2F)](https://community.majorleaguecyber.org/)

If you prefer commercial support or have a special project, feel free to [contact us](https://ctfd.io/contact/).

## Managed Hosting

Looking to use CTFd but don't want to deal with managing infrastructure? Check out [the CTFd website](https://ctfd.io/) for managed CTFd deployments.

## MajorLeagueCyber

CTFd is heavily integrated with [MajorLeagueCyber](https://majorleaguecyber.org/). MajorLeagueCyber (MLC) is a CTF stats tracker that provides event scheduling, team tracking, and single sign on for events.

By registering your CTF event with MajorLeagueCyber users can automatically login, track their individual and team scores, submit writeups, and get notifications of important events.

To integrate with MajorLeagueCyber, simply register an account, create an event, and install the client ID and client secret in the relevant portion in `CTFd/config.py` or in the admin panel:

```python
OAUTH_CLIENT_ID = None
OAUTH_CLIENT_SECRET = None
```

## Credits

- Logo by [Laura Barbera](http://www.laurabb.com/)
- Theme by [Christopher Thompson](https://github.com/breadchris)
- Notification Sound by [Terrence Martin](https://soundcloud.com/tj-martin-composer)


# Main Page 
<style>
.zs-event {
  background: #050a06;
  color: #ffffff;
  padding: 85px 20px;
  text-align: center;
  font-family: 'Courier New', monospace;
  min-height: 75vh;
}

.zs-status {
  color: #4cff20;
  font-size: 14px;
  letter-spacing: 2px;
}

.zs-event h1 {
  color: #4cff20;
  font-size: clamp(36px, 6vw, 76px);
  font-weight: 900;
  margin: 35px 0 15px;
  text-shadow: 0 0 30px #4cff2055;
}

.zs-event h2 {
  color: #ffffff;
  font-size: clamp(20px, 3vw, 30px);
  letter-spacing: 3px;
  font-weight: 700;
}

.zs-partner {
  color: #4cff20;
  font-size: 19px;
  margin: 25px auto;
  font-weight: 600;
}

.zs-description {
  color: #aebcaf;
  font-size: 17px;
  max-width: 680px;
  margin: 28px auto;
  line-height: 1.8;
}

.zs-terminal {
  color: #4cff20;
  margin: 30px auto;
  font-size: 15px;
}

/* ENTER THE ARENA button */
.zs-event a.zs-button,
.zs-event a.zs-button:link,
.zs-event a.zs-button:visited {
  display: inline-block;
  margin: 10px;
  padding: 15px 30px;
  background-color: #4cff20 !important;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  opacity: 1 !important;
  font-size: 16px !important;
  font-weight: 800 !important;
  text-decoration: none !important;
  text-shadow: none !important;
  box-shadow: none !important;
  filter: none !important;
  border: 1px solid #4cff20;
  border-radius: 4px;
  transition: background-color .25s, color .25s;
}

/* ENTER THE ARENA hover */
.zs-event a.zs-button:hover,
.zs-event a.zs-button:focus {
  background-color: #ffffff !important;
  color: #050a06 !important;
  -webkit-text-fill-color: #050a06 !important;
  border-color: #ffffff;
  text-shadow: none !important;
  box-shadow: none !important;
  filter: none !important;
}

/* VIEW LEADERBOARD button */
.zs-event a.zs-outline,
.zs-event a.zs-outline:link,
.zs-event a.zs-outline:visited {
  background-color: transparent !important;
  color: #4cff20 !important;
  -webkit-text-fill-color: #4cff20 !important;
  border-color: #4cff20;
  text-shadow: none !important;
  box-shadow: none !important;
}

/* VIEW LEADERBOARD hover */
.zs-event a.zs-outline:hover,
.zs-event a.zs-outline:focus {
  background-color: #4cff20 !important;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  border-color: #4cff20;
  text-shadow: none !important;
  box-shadow: none !important;
}

/* Mobile responsiveness */
@media (max-width: 650px) {
  .zs-event {
    padding: 55px 15px;
  }

  .zs-event h1 {
    font-size: 38px;
  }

  .zs-partner {
    font-size: 16px;
  }

  .zs-event a.zs-button {
    padding: 14px 22px;
    font-size: 14px !important;
  }
}
</style>

<section class="zs-event">

  <div class="zs-status">
    ● SYSTEM ONLINE
  </div>

  <h1>ZEROSECURE 2.0</h1>

  <h2>HACK. EXPLOIT. CAPTURE.</h2>

  <p class="zs-description">
    In partnership with The Hackers Meetup Hyderabad
  </p>

  <div>
    <a href="/challenges" class="zs-button">
      ENTER THE ARENA →
    </a>
</section>
