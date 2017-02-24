import React, {Component} from "react";
import ajax from "superagent";
import axios from "axios";
import jsonp from "jsonp";

import {
  BlockContent,
  CommonBlock
} from "../../components/plugin";

import icons from "../../icons";

//import TwitterBlockStyle from "./TwitterBlockStyle";

export default class TwitterBlock extends Component {
  constructor(props) {
    super(props);
    this.actions = [
      {"key": "delete", "icon": icons.DeleteIcon, "action": this.props.container.remove}
    ];
    this.state = {
      tweettHtml: "<div>Loading</div>"
    }
  }

  componentDidMount() {
    let url = "https://publish.twitter.com/oembed?url=" + this.props.data.src + "&align=center";
    jsonp(url, null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        this.setState({
          tweettHtml: "<div>" + data.html + "</div>"
        });
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
      twttr.widgets.load();
  }

  getTwittComponent() {
    const tweettContainer = {
      paddingTop: "56px",
      marginBottom: "-30px"
    }

    return (
      <div className="tweettContainer" style={tweettContainer} dangerouslySetInnerHTML={{__html: this.state.tweettHtml}}></div>
    );
  }

  isYoutubeUrl(url) {
    if(url.indexOf("youtube.com") || url.indexOf("youtu.be"))
      return true;
    return false;
  }

  render() {
    return (
      <CommonBlock {...this.props} actions={this.actions}>
          {this.getTwittComponent()}
      </CommonBlock>
    );
  }
}
