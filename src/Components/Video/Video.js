import React from "react";
import { Query } from "react-apollo";
import ReactPlayer from "react-player";

import getVideo from "../../Apollo/Queries/getVideo";

// Only videoId prop is needed
// Other props will have default values provided by react-player

// Default values:
// width - 640
// height - 360
// controls - false
// loop - false

const Video = ({ videoId, width, height, style, controls, loop }) => {
  return (
    <Query query={getVideo} variables={{ id: videoId }}>
      {({ data, loading, error }) =>
        !loading && (
          <ReactPlayer
            url={data.video.externalURL}
            width={width}
            height={height}
            style={style}
            controls={controls}
            loop={loop}
          />
        )
      }
    </Query>
  );
};

export default Video;
