var React = require('react');
var T = require('i18n-react');
var $ = require('jquery');
var scrollMonitor = require("scrollMonitor");
$.fn.dropdown = require('semantic-ui-dropdown');
$.fn.transition = require('semantic-ui-transition');

var NavigationMenu = React.createClass({
    getInitialState: function() {
        return {
            NavTitle: 'My Resume'
        };
    },
    componentDidMount() {
        var profileWatcher = scrollMonitor.create( document.getElementById("profile") );
        var skillsWatcher = scrollMonitor.create( document.getElementById("skills") );
        var experienceWatcher = scrollMonitor.create( document.getElementById("experience") );
        var educationWatcher = scrollMonitor.create( document.getElementById("education") );
        var portfolioWatcher = scrollMonitor.create( document.getElementById("portfolio") );
        var contactWatcher = scrollMonitor.create( document.getElementById("contact") );
        $('.ui.dropdown').dropdown();
        profileWatcher.fullyEnterViewport(function() {
            this.setState({ NavTitle: 'Profile' })
        }.bind(this));
        skillsWatcher.fullyEnterViewport(function() {
            this.setState({ NavTitle: 'Skills' })
        }.bind(this));
        experienceWatcher.fullyEnterViewport(function() {
            this.setState({ NavTitle: 'Experience' })
        }.bind(this));
        educationWatcher.fullyEnterViewport(function() {
            this.setState({ NavTitle: 'Education' })
        }.bind(this));
        portfolioWatcher.fullyEnterViewport(function() {
            this.setState({ NavTitle: 'Portfolio' })
        }.bind(this));
        contactWatcher.fullyEnterViewport(function() {
            this.setState({ NavTitle: 'Contact' })
        }.bind(this));
    },
    render: function() {
      var trans = this.props.trans;
      return (
          <header className="headerNav">
              <div className="ui floating dropdown labeled icon button language-button">
                  <i className="world icon"></i>
                  <span className="text">English</span>
                  <div className="menu">
                      <div className="item" onClick={this.props.handleClick.bind(null, 'EN.')}>English</div>
                      <div className="item" onClick={this.props.handleClick.bind(null, 'FR.')} >Français</div>
                  </div>
              </div>
          <div className="wrap" aria-expanded="true">
              <h2 className="logo"><a>{this.state.NavTitle}</a></h2>
            <a id="menu-icon">&#9776; Menu</a>
            <nav className="navbar">
              <ul className="menu">
                  <li><a className="active" href="#profile"> <T text={trans + 'Navigation.profile'}/> </a></li>
                  <li><a href="#skills"> <T text={trans + 'Navigation.skills'}/> </a></li>
                  <li><a href="#experience"> <T text={trans + 'Navigation.workExperience'}/> </a></li>
                  <li><a href="#education"> <T text={trans + 'Navigation.education'}/> </a></li>
                  <li><a href="#portfolio"> <T text={trans + 'Navigation.portfolio'}/> </a></li>
                  <li><a href="#contact"> <T text={trans + 'Navigation.contact'}/> </a></li>
                  <li className="language-responsive-button"><a onClick={this.props.handleClick.bind(null, 'EN.')}>
                      <T text={trans + 'Navigation.english'}/>
                  </a></li>
                  <li className="language-responsive-button"><a onClick={this.props.handleClick.bind(null, 'FR.')}>
                      <T text={trans + 'Navigation.french'}/>
                  </a></li>
              </ul>
            </nav>

          </div>
        </header>
      );
    }
});

export default NavigationMenu;
