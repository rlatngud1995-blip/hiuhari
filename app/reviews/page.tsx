
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

const REVIEWS =
  "https://m.booking.naver.com/booking/13/bizes/728358/items/7484787?area=pll&lang=ko&tab=review&theme=place";

const BOOKING =
  "https://m.booking.naver.com/booking/13/bizes/728358/items/7484787?area=pll&lang=ko&theme=place";

const feedback = [
  { title: "원하는 스타일로 잘해줘요", value: "259명" },
  { title: "친절해요", value: "218명" },
  { title: "시술이 꼼꼼해요", value: "168명" },
  { title: "스타일 추천을 잘해줘요", value: "146명" },
  { title: "트렌디해요", value: "73명" },
];

export const metadata: Metadata = {
  title: "고객 리뷰 | 하이유헤어 청당점 이해린",
  description:
    "하이유헤어 청당점 이해린 디자이너의 네이버 예약 고객 평가와 실제 방문 리뷰를 확인해 보세요.",
  alternates: {
    canonical: "https://www.hiuhair.com/reviews",
  },
};

export default function ReviewsPage() {
  return (
    <div className="hiu-reviews">
      <style>{`
        .hiu-reviews {
          --navy:#193b71;
          --cream:#f7f5f1;
          --line:#e8e3dc;
          --muted:#747983;
          color:#292d34;
          background:white;
          font-family:-apple-system,
            BlinkMacSystemFont,
            "Apple SD Gothic Neo",
            "Noto Sans KR",sans-serif;
          min-height:100vh;
          word-break:keep-all;
        }
        .hiu-reviews *{box-sizing:border-box}
        .hiu-reviews a{text-decoration:none}
        .rr-wrap{
          width:min(1050px,calc(100% - 44px));
          margin:auto;
        }
        .rr-hero{
          background:var(--cream);
          padding:66px 20px;
          text-align:center;
        }
        .rr-eyebrow{
          font-size:10px;
          font-weight:700;
          letter-spacing:2px;
          color:var(--navy);
        }
        .rr-hero h1{
          font:clamp(39px,5vw,58px) Georgia,serif;
          margin:19px 0;
        }
        .rr-hero p{
          font-size:13px;
          line-height:2;
          color:var(--muted);
        }
        .rr-section{padding:65px 0 85px}
        .rr-stats{
          display:flex;
          justify-content:center;
          align-items:center;
          gap:40px;
          margin-bottom:45px;
        }
        .rr-stat{text-align:center}
        .rr-stat strong{
          display:block;
          font:52px Georgia,serif;
          color:var(--navy);
        }
        .rr-stat span{
          font-size:12px;
          color:var(--muted);
        }
        .rr-divider{
          height:55px;
          width:1px;
          background:var(--line);
        }
        .rr-heading{
          font-size:29px;
          font-weight:500;
          margin:0 0 25px;
        }
        .rr-grid{
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:14px;
        }
        .rr-card{
          background:var(--cream);
          border:1px solid var(--line);
          padding:27px;
          min-height:190px;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
        }
        .rr-card small{
          font-size:9px;
          color:var(--navy);
          font-weight:700;
          letter-spacing:1px;
        }
        .rr-card h3{
          font-size:18px;
          line-height:1.6;
          margin:18px 0;
        }
        .rr-card strong{
          display:block;
          font:28px Georgia,serif;
          color:var(--navy);
        }
        .rr-card p{
          font-size:11px;
          color:var(--muted);
          margin:7px 0 0;
        }
        .rr-note{
          color:var(--muted);
          font-size:11px;
          line-height:1.9;
          margin-top:23px;
        }
        .rr-real{
          background:var(--navy);
          padding:55px 35px;
          text-align:center;
          color:white;
          margin-top:55px;
        }
        .rr-real h2{
          font-size:30px;
          font-weight:450;
          line-height:1.5;
          margin:20px 0;
        }
        .rr-real p{
          font-size:13px;
          line-height:2;
          color:#dce5f0;
        }
        .rr-button{
          display:inline-block;
          padding:16px 26px;
          margin-top:23px;
          background:white;
          color:var(--navy);
          font-size:12px;
          font-weight:700;
        }
        .rr-book{
          display:inline-block;
          padding:15px 24px;
          border:1px solid var(--navy);
          color:var(--navy);
          font-size:12px;
          font-weight:700;
          margin-top:25px;
        }
        .rr-footer{
          background:#17263b;
          color:white;
          text-align:center;
          padding:40px 20px 65px;
          font-size:12px;
          line-height:2;
        }
        .rr-footer a{color:white}
        @media(max-width:650px){
          .rr-wrap{width:calc(100% - 36px)}
          .rr-hero{padding:53px 18px}
          .rr-section{padding:49px 0}
          .rr-stats{gap:30px}
          .rr-stat strong{font-size:44px}
          .rr-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
          .rr-card{padding:19px 15px;min-height:175px}
          .rr-card h3{font-size:15px}
          .rr-card strong{font-size:25px}
          .rr-real{padding:42px 20px}
          .rr-real h2{font-size:27px}
        }
      `}</style>

      <SiteHeader />

      <main>
        <section className="rr-hero">
          <span className="rr-eyebrow">
            HI U HAIR · CLIENT FEEDBACK
          </span>

          <h1>Client Reviews</h1>
          <p>
            네이버 예약 고객들이 선택한 좋은 점과
            <br />
            실제 방문 후기를 확인하세요.
          </p>
        </section>

        <section className="rr-section">
          <div className="rr-wrap">
            <div className="rr-stats">
              <div className="rr-stat">
                <strong>293</strong>
                <span>예약자 리뷰</span>
              </div>

              <div className="rr-divider" />

              <div className="rr-stat">
                <strong>263</strong>
                <span>좋은 점 평가 참여</span>
              </div>
            </div>

            <h2 className="rr-heading">
              Naver Customer Feedback
            </h2>

            <div className="rr-grid">
              {feedback.map((item) => (
                <article
                  key={item.title}
                  className="rr-card"
                >
                  <div>
                    <small>
                      NAVER CUSTOMER FEEDBACK
                    </small>
                    <h3>{item.title}</h3>
                  </div>

                  <div>
                    <strong>{item.value}</strong>
                    <p>네이버 고객 선택 평가</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="rr-note">
              평가 수치는 2026년 10월 10일 확인 기준이며
              자동으로 갱신되지 않습니다.
              고객 선택 평가와 실제 리뷰 원문은
              서로 구분하여 표시합니다.
            </p>

            <div className="rr-real">
              <span className="rr-eyebrow" style={{color:"#d9c6a9"}}>
                REAL VISITOR REVIEWS
              </span>

              <h2>
                실제 고객의 이야기를
                <br />
                네이버에서 만나보세요.
              </h2>

              <p>
                하이유헤어 청당점 방문 고객이
                작성한 리뷰를 네이버 예약 페이지에서
                직접 확인할 수 있습니다.
              </p>

              <a
                href={REVIEWS}
                target="_blank"
                rel="noopener noreferrer"
                className="rr-button"
              >
                실제 네이버 리뷰 확인하기 ↗
              </a>
            </div>

            <div style={{textAlign:"center"}}>
              <a
                href={BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                className="rr-book"
              >
                이해린 디자이너 네이버 예약 ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="rr-footer">
        HI U HAIR · CHEONGDANG
        <br />
        이해린 디자이너 · 010-2327-7653
        <br />
        <Link href="/">← 메인으로 돌아가기</Link>
      </footer>
    </div>
  );
}
