import React, {Component} from 'react';
import './App.css';
import './theme.scss';
import missions from './missions';
import Launch from "./Launch";

class App extends Component {
    constructor() {
        super();
        this.changeTheme = this.changeTheme.bind(this)
    }

    isDark = ''
    componentDidMount() {
        if (localStorage.getItem('data-theme') !== '') {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        this.isDark = localStorage.getItem('data-theme')
    }

    changeTheme() {
        if (this.isDark) {
            document.documentElement.setAttribute('data-theme', '');
            localStorage.setItem('data-theme', '');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('data-theme', 'dark');
        }
        this.isDark = !this.isDark;
        console.log(this.isDark)
    }

    render() {
        return (
            <div className="App">
                <div>
                <h1 className='title'>SpaceX Launches 2021<button className='title' id="theme-button" onClick={this.changeTheme}>Change theme</button></h1>
                </div>
                <div className='launches'>
                    <div className='container'>
                        {missions.map((mission, index) => (
                            <div>
                                <Launch mission={mission}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
