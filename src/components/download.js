import React from "react";

class DownloadLink extends React.Component {
    render() {
        return (
            <a href={this.props.src} download>{this.props.children}</a>
        )
    }
}


class MyComponent extends React.Component {
    render() {
        return (
            <DownloadLink src="C:/Users/Public/Videos/Olwethu_Mkhuhlane_CV.pdf" target="_blank">Click Here</DownloadLink>
        )
    }
}

export default DownloadLink;