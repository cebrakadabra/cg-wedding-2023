import React from 'react';

require('./VideoHOC.less');

const styles = {
    storyContent: {
        width: "auto",
        maxWidth: "100%",
        maxHeight: "100%",
        margin: "auto"
    },
    videoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

export const renderer = ({ story, action, isPaused, config, messageHandler }) => {

    const [loaded, setLoaded] = React.useState(false);
    const [muted, setMuted] = React.useState(true);
    const { width, height, loader, storyStyles } = config;
    const [firstPlay, setFirstPlay] = React.useState(true);

    let computedStyles = {
        ...styles.storyContent,
        ...(storyStyles || {})
    }

    let vid = React.useRef(null);

    React.useEffect(() => {
        if (vid.current) {
            if (isPaused) {
                vid.current.pause();
            } else {
                setFirstPlay(false);
                vid.current.play().catch(() => { });
            }
        }
    }, [isPaused]);

    const onWaiting = () => {
        action("pause", true);
    }

    const onPlaying = () => {
        action("play", true);
    }

    const videoLoaded = () => {
        messageHandler('UPDATE_VIDEO_DURATION', { duration: vid.current.duration });
        setLoaded(true);
        if (!firstPlay) {
            setMuted(false);
            vid.current.play().then(() => {
                action('play');
            }).catch(() => {
                setMuted(true);
                vid.current.play().finally(() => {
                    action('play');
                })
            });
        }
    }

    const Spinner = () => {
        return <img src="/assets/svg/spinner.svg" alt="loading-spinner"/>
    }


    return (
        <>
            <div className="video-header">
                <div className="video-header-inner">
                    <span>
                        <p className="insta-heading">{story.header.heading}</p>
                        <p className="insta-subheading">{story.header.subheading}</p>
                    </span>
                </div>
            </div>
            <div className="video-controls">
                {firstPlay ? (
                    <div className="play-button-outer">
                        <div className="play-button" />
                    </div>
                ) : null}
            </div>
            <div style={styles.videoContainer}>
                <video
                    ref={vid}
                    style={computedStyles}
                    src={story.url}
                    controls={false}
                    onLoadedData={videoLoaded}
                    playsInline
                    onWaiting={onWaiting}
                    onPlaying={onPlaying}
                    muted={muted}
                    autoPlay
                    webkit-playsinline="true"
                />
                {!loaded && (
                    <div
                        style={{
                            width: width,
                            height: height,
                            position: "absolute",
                            left: 0,
                            top: 0,
                            background: "rgba(0, 0, 0, 0.9)",
                            zIndex: 9,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#ccc"
                        }}
                    >
                        {loader || <Spinner />}
                    </div>
                )}
            </div>
        </>
    );
};

export const tester = (story) => {
    return {
        condition: story.type === 'video',
        priority: 5,
    };
};
