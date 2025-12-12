export default function Home() {
    return (
        <div className="home">
            <div className="hi">Hi,it`s me</div>
            <div className="myname">Md. Mehedi Hasan</div>
            <div className="intro-title">Turning Data Into Meaningful Insights</div>
            <div className="intro">I am a <span className="span">Data Analyst</span> focused on transforming raw data into meaningful insights that drive informed decisions. I specialize in analyzing trends, building clear visualizations, and turning complex information into actionable strategies that help businesses grow smarter and faster.</div>
            <div className="button-container">
                <button className="resume-button" onClick={() => window.open("https://drive.google.com/file/d/17Eo9AAwCwTya1uK-XhTF3AhfaYLR_qka/view?usp=sharing", "_blank")} >
                Check my resume</button>
            </div>
        </div>
    )
}