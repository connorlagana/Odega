import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import justinPic from "../../images/team/justin.jpeg";
import kevinPic from "../../images/team/kevin.jpeg";
import bennettPic from "../../images/team/bennett.jpeg";
import connorPic from "../../images/team/connor.jpg";

class MeetTheTeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teamMembers: [
        {
          name: "Justin Gray",
          job: "CEO and Co-Founder",
          picture: justinPic
        },
        {
          name: "Kevin Thomas",
          job: "Co-Founder",
          picture: kevinPic
        },
        {
          name: "Connor Lagana",
          job: "Lead Software Engineer",
          picture: connorPic
        },
        {
          name: "Connor Lagana",
          job: "Lead Software Engineer",
          picture: connorPic
        },
        {
          name: "Connor Lagana",
          job: "Lead Software Engineer",
          picture: connorPic
        },
        {
          name: "Connor Lagana",
          job: "Lead Software Engineer",
          picture: connorPic
        },
        {
          name: "Connor Lagana",
          job: "Lead Software Engineer",
          picture: connorPic
        },
        {
          name: "Bennett Hall",
          job: "Lead Designer",
          picture: bennettPic
        }
      ]
    };
  }
  render() {
    return (
      <div className="MeetTheTeam">
        <div id="mttTitle">Meet The Team</div>
        <div className="team">
          {this.state.teamMembers.map((member, key) => (
            <div className="member">
              <Fade>
                <img src={member.picture} id="memPic" />
              </Fade>
              <Fade bottom>
                <div id="memName">{member.name}</div>

                <div id="memJob">{member.job}</div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MeetTheTeam;
