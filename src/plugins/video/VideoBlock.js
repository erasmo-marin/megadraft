/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, {Component} from "react";

import {
  BlockContent,
  BlockData,
  BlockInput,
  CommonBlock
} from "../../components/plugin";

import icons from "../../icons";

import VideoBlockStyle from "./VideoBlockStyle";


export default class VideoBlock extends Component {
  constructor(props) {
    super(props);

    this._handleCaptionChange = ::this._handleCaptionChange;

    this.actions = [
      {"key": "delete", "icon": icons.DeleteIcon, "action": this.props.container.remove}
    ];
  }

  _handleCaptionChange(event) {
    this.props.container.updateData({caption: event.target.value});
  }

  renderYoutubeElement(url) {
    let videoId = url.split("/").pop();

    return (<div className="block__content__videoContainer">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                className="block__content__videoContainer__youtube"
              />
            </div>
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
        <BlockContent>
          <Choose>
            <When condition={this.isYoutubeUrl(this.props.data.src)}>
              { this.renderYoutubeElement(this.props.data.src) }
            </When>
            <Otherwise>
              <video controls style={VideoBlockStyle.video} src={this.props.data.src} alt=""/>
            </Otherwise>
          </Choose>
        </BlockContent>
        <BlockData>
          <BlockInput
            placeholder="Caption"
            value={this.props.data.caption}
            onChange={this._handleCaptionChange} />
        </BlockData>
      </CommonBlock>
    );
  }
}
