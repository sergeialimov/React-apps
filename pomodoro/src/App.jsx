import React, { Component } from 'react';
import './App.css';
import arrowUp from './img/01.png';
import arrowDown from './img/02.png';
import soundPath from './sound/07.wav';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      breakTime: new Date(new Date()
        .setHours(0, 5, 0, 0)),
      breakCounter: 5,
      breakPaused: true,
      intervalId: 0,
      mode: 'session',
      session: new Date(new Date()
        .setHours(0, 25, 0, 0)),
      sessionCounter: 25,
      sessionPaused: true,
    };
    this.increaseBreak = this.increaseBreak.bind(this);
    this.decreaseBreak = this.decreaseBreak.bind(this);
    this.increaseSession = this.increaseSession.bind(this);
    this.decreaseSession = this.decreaseSession.bind(this);
    this.startPause = this.startPause.bind(this);
    this.runSession = this.runSession.bind(this);
    this.runBreak = this.runBreak.bind(this);
    this.refresh = this.refresh.bind(this);
    this.beep = React.createRef();
  }

  // autotests for FreeCodeCamp
  componentDidMount () {
    const script = document.createElement('script');
    script.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js';
    script.async = true;
    document.body.appendChild(script);
  }

  componentWillUnmount () {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  runSession () {
    const { session } = this.state;
    const id = setInterval(() => {
      const { sessionPaused } = this.state;
      if (!sessionPaused && (session.getMinutes() > 0 || session.getSeconds() > 0)) {
        session.setSeconds(session.getSeconds() - 1);
        this.setState({
          session,
        });
      }
      if (session.getMinutes() === 0 && session.getSeconds() === 0) {
        setTimeout(() => {
          const { intervalId, sessionCounter } = this.state;
          clearInterval(intervalId);
          this.setState({
            sessionPaused: true,
            session: new Date(new Date()
              .setHours(0, sessionCounter, 0, 0)),
            breakPaused: false,
            mode: 'break',
          });
          this.beep.current.play();
          this.runBreak();
        }, 1000);
      }
    }, 1000);
    this.setState({ intervalId: id });
  }

  runBreak () {
    const { breakTime } = this.state;
    const id = setInterval(() => {
      const { breakPaused } = this.state;
      if (!breakPaused) {
        breakTime.setSeconds(breakTime.getSeconds() - 1);
        this.setState({
          breakTime,
        });
        if (breakTime.getMinutes() === 0 && breakTime.getSeconds() === 0) {
          setTimeout(() => {
            const { intervalId, breakCounter } = this.state;
            clearInterval(intervalId);
            this.setState({
              breakTime: new Date(new Date()
                .setHours(0, breakCounter, 0, 0)),
              breakPaused: true,
              mode: 'session',
              sessionPaused: false,
            });
            this.runSession();
          }, 1000);
        }
      }
    }, 1000);
    this.setState({ intervalId: id });
  }

  startPause () {
    const {
      intervalId,
      mode,
      sessionPaused,
      breakPaused,
    } = this.state;
    clearInterval(intervalId);
    if (mode === 'session') {
      if (sessionPaused) {
        this.runSession();
      }
      this.setState({
        sessionPaused: !sessionPaused,
      });
    } else {
      if (breakPaused) {
        this.runBreak();
      }
      this.setState({
        breakPaused: !breakPaused,
      });
    }
  }

  refresh () {
    this.setState({
      mode: 'session',
      sessionPaused: true,
      breakPaused: true,
      session: new Date(new Date()
        .setHours(0, 25, 0, 0)),
      sessionCounter: 25,
      breakTime: new Date(new Date()
        .setHours(0, 5, 0, 0)),
      breakCounter: 5,
    });
    this.beep.current.pause();
    this.beep.current.load();
  }

  increaseSession () {
    const { session, sessionPaused, sessionCounter } = this.state;
    const minutes = session.getMinutes();
    const hours = session.getHours();
    if (sessionPaused && minutes < 60 && hours === 0) {
      this.setState({
        session: new Date(new Date()
          .setHours(0, sessionCounter + 1, 0, 0)),
        sessionCounter: sessionCounter + 1,
      });
    }
  }

  decreaseSession () {
    const { session, sessionPaused, sessionCounter } = this.state;
    const minutes = session.getMinutes();
    if (sessionPaused && minutes > 1) {
      this.setState({
        session: new Date(new Date()
          .setHours(0, sessionCounter - 1, 0, 0)),
        sessionCounter: sessionCounter - 1,
      });
    }
  }

  increaseBreak () {
    const { breakTime, breakCounter, sessionPaused } = this.state;
    const minutes = breakTime.getMinutes();
    const hours = breakTime.getHours();
    if (sessionPaused && minutes < 60 && hours === 0) {
      this.setState({
        breakTime: new Date(new Date()
          .setHours(0, breakCounter + 1, 0, 0)),
        breakCounter: breakCounter + 1,
      });
    }
  }

  decreaseBreak () {
    const { breakTime, breakCounter, sessionPaused } = this.state;
    const minutes = breakTime.getMinutes();
    if (sessionPaused && minutes > 1) {
      this.setState({
        breakTime: new Date(new Date()
          .setHours(0, breakCounter - 1, 0, 0)),
        breakCounter: breakCounter - 1,
      });
    }
  }

  render () {
    const {
      mode,
      session,
      breakTime,
      breakCounter,
      sessionCounter,
    } = this.state;
    const time = mode === 'session' ? session : breakTime;
    const timerLabel = mode === 'session' ? 'Session' : 'Break';
    let seconds = time.getSeconds();
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    let minutes = time.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return (
      <div className="App">
        <div className="pomodoro">
          <h1>Pomodoro Clock</h1>
          <div id="abc">
            <div className="break-session">
              <div id="break-label">Break Length</div>
              <div id="wrapper">
                <input
                  className="arrows"
                  id="break-decrement"
                  type="image"
                  src={arrowDown}
                  alt="break down"
                  onClick={this.decreaseBreak}
                />
                <div id="break-length">{breakCounter}</div>
                <input
                  className="arrows"
                  id="break-increment"
                  type="image"
                  src={arrowUp}
                  alt="break up"
                  onClick={this.increaseBreak}
                />
              </div>
            </div>
            <div className="break-session">
              <div id="session-label">Session Length</div>
              <div id="wrapper">
                <input
                  className="arrows"
                  id="session-decrement"
                  type="image"
                  src={arrowDown}
                  alt="session down"
                  onClick={this.decreaseSession}
                />
                <div id="session-length">{sessionCounter}</div>
                <input
                  className="arrows"
                  id="session-increment"
                  type="image"
                  src={arrowUp}
                  alt="session up"
                  onClick={this.increaseSession}
                />
              </div>
            </div>
          </div>
          <div id="timer">
            <div id="timer-label">{timerLabel}</div>
            <p id="time-left">{`${minutes}:${seconds}`}</p>
          </div>
          <audio ref={this.beep} id="beep">
            <source src={soundPath} />
            <track label="English" kind="captions" src="https://media.martymcgui.re/.../subtitles.vtt" />
          </audio>
          <div id="buttons">
            <div id="start_stop" onClick={this.startPause}>start/pause</div>
            <div id="reset" onClick={this.refresh}>refresh</div>
          </div>
        </div>
      </div>
    );
  }
}

App.displayName = 'Hello';
