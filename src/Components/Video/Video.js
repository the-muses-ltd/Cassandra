import React from "react";
import { Query } from "react-apollo";
import ReactPlayer from "react-player";

import getVideo from "../../Apollo/Queries/getVideo";

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
