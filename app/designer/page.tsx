
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

const BOOKING =
  "https://m.booking.naver.com/booking/13/bizes/728358/items/7484787?area=pll&lang=ko&theme=place";

const INSTAGRAM =
  "https://www.instagram.com/hiu_haerin/";

const qualifications = [
  "유원대학교 뷰티케어학과 졸업",
  "미용 종합면허증",
  "헤어 국가자격증",
  "메이크업 국가자격증",
];

const certificates = [
  "Makeup 3급 자격증",
  "Makeup 2급 자격증",
  "방송분장사 3급 자격증",
  "Trichologist 자격증",
  "Personal Color Consultant 자격증",
  "HISTEMO HEAD SPA 수료",
];

const awards = [
  "전국미용경연대회 Permanent 은상",
  "전국미용경연대회 Haircolor 동상",
  "전국미용경진대회 Hair design perm 우수상",
  "맛과멋창의력경진대회 Permanent 은상",
];

export const metadata: Metadata = {
  title: "이해린 디자이너 소개 | 하이유헤어 청당점",
  description:
    "천안 청당동 하이유헤어 이해린 디자이너의 프로필, 학력, 미용 자격증 및 수상 경력을 확인하세요.",
  alternates: {
    canonical: "https://www.hiuhair.com/designer",
  },
};

export default function DesignerPage() {
  return (
    <div className="hiu-designer">
      <style>{`
        .hiu-designer {
          --navy:#193b71;
          --cream:#f7f5f1;
          --muted:#737983;
          --line:#e6e1da;
          color:#292d34;
          font-family:-apple-system,
            BlinkMacSystemFont,
            "Apple SD Gothic Neo",
            "Noto Sans KR",sans-serif;
          word-break:keep-all;
          min-height:100vh;
        }
        .hiu-designer *{box-sizing:border-box}
        .hiu-designer a{text-decoration:none}
        .dd-wrap{
          width:min(1100px,calc(100% - 44px));
          margin:auto;
        }
        .dd-hero{
          background:var(--cream);
          padding:65px 0;
          text-align:center;
        }
        .dd-eyebrow{
          font-size:10px;
          letter-spacing:2.5px;
          font-weight:700;
          color:var(--navy);
        }
        .dd-hero h1{
          font-size:clamp(34px,5vw,51px);
          font-weight:500;
          line-height:1.4;
          margin:20px 0;
        }
        .dd-hero p{
          color:var(--muted);
          font-size:13px;
          line-height:2;
        }
        .dd-section{padding:75px 0}
        .dd-grid{
          display:grid;
          grid-template-columns:.95fr 1.05fr;
          gap:65px;
          align-items:center;
        }
        .dd-photo{
          position:relative;
          width:100%;
          aspect-ratio:4/5;
          min-height:380px;
          background:#e4ddd5;
          overflow:hidden;
        }
        .dd-photo img{
          object-fit:cover;
          object-position:center 30%;
        }
        .dd-photo-caption{
          position:absolute;
          left:20px;
          bottom:20px;
          background:rgba(255,255,255,.95);
          padding:13px 17px;
          font:16px Georgia,serif;
          color:var(--navy);
        }
        .dd-content h2{
          font-size:clamp(29px,4vw,43px);
          font-weight:500;
          line-height:1.5;
          letter-spacing:-1px;
        }
        .dd-content h2 strong{color:var(--navy)}
        .dd-content p{
          color:var(--muted);
          font-size:14px;
          line-height:2.2;
        }
        .dd-content a{
          color:var(--navy);
          font-size:12px;
          font-weight:700;
        }
        .dd-credentials{
          padding:70px 0;
          background:var(--cream);
        }
        .dd-heading{
          color:var(--navy);
          font:35px Georgia,serif;
          margin:0 0 32px;
        }
        .dd-card-grid{
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:16px;
        }
        .dd-card{
          background:white;
          border:1px solid var(--line);
          padding:29px 23px;
        }
        .dd-card h3{
          font-size:16px;
          color:var(--navy);
          margin:0 0 20px;
        }
        .dd-card ul{
          margin:0;
          padding-left:18px;
        }
        .dd-card li{
          font-size:12px;
          line-height:2.1;
          color:#626a75;
        }
        .dd-booking{
          background:var(--navy);
          padding:75px 20px;
          text-align:center;
          color:white;
        }
        .dd-booking h2{
          font-size:34px;
          font-weight:450;
          line-height:1.5;
        }
        .dd-booking p{
          font-size:13px;
          color:#dbe5f2;
          line-height:2;
        }
        .dd-booking a{
          display:inline-block;
          margin-top:22px;
          padding:16px 27px;
          background:white;
          color:var(--navy);
          font-size:12px;
          font-weight:700;
        }
        .dd-footer{
          background:#162740;
          color:white;
          text-align:center;
          padding:39px 20px 65px;
          font-size:12px;
          line-height:2;
        }
        .dd-footer a{color:white}
        @media(max-width:700px){
          .dd-wrap{width:calc(100% - 36px)}
          .dd-hero{padding:53px 0}
          .dd-section{padding:50px 0}
          .dd-grid{grid-template-columns:1fr;gap:30px}
          .dd-photo{min-height:360px}
          .dd-content h2{font-size:31px}
          .dd-content p{font-size:13px}
          .dd-card-grid{grid-template-columns:1fr}
          .dd-card{padding:25px}
          .dd-credentials{padding:55px 0}
        }
      `}</style>

      <SiteHeader />

      <main>
        <section className="dd-hero">
          <div className="dd-wrap">
            <span className="dd-eyebrow">
              HI U HAIR · DESIGNER HAERIN LEE
            </span>

            <h1>이해린 디자이너 소개</h1>
            <p>
              아름다움의 디테일을 완성하는
              <br />
              하이유헤어 청당점 이해린 디자이너
            </p>
          </div>
        </section>

        <section className="dd-section">
          <div className="dd-wrap dd-grid">
            <div className="dd-photo">
              <Image
                src="/IMG_1443.jpeg"
                alt="이해린 디자이너 프로필 사진"
                fill
                priority
                sizes="(max-width:700px) 100vw, 50vw"
              />
              <div className="dd-photo-caption">
                Designer Haerin Lee
              </div>
            </div>

            <div className="dd-content">
              <span className="dd-eyebrow">
                MEET YOUR DESIGNER
              </span>

              <h2>
                아름다움의 디테일을
                <br />
                완성하는 <strong>이해린</strong>
              </h2>

              <p>
                안녕하세요.
                <br />
                하이유헤어 청당점 이해린 디자이너입니다.
              </p>

              <p>
                고객님의 취향과 모발의 특성,
                평소 스타일링 방법까지 함께 고려하여
                자연스럽고 감각적인 변화를 고민합니다.
              </p>

              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram @hiu_haerin ↗
              </a>
            </div>
          </div>
        </section>

        <section className="dd-credentials">
          <div className="dd-wrap">
            <span className="dd-eyebrow">
              PROFESSIONAL BACKGROUND
            </span>

            <h2 className="dd-heading">
              Credentials & Awards
            </h2>

            <div className="dd-card-grid">
              <article className="dd-card">
                <h3>학력 및 기본 자격</h3>
                <ul>
                  {qualifications.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </article>

              <article className="dd-card">
                <h3>전문 자격 및 수료</h3>
                <ul>
                  {certificates.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </article>

              <article className="dd-card">
                <h3>수상 경력</h3>
                <ul>
                  {awards.map((award) => (
                    <li key={award}>{award}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="dd-booking">
          <span className="dd-eyebrow" style={{color:"#d7c2a2"}}>
            PERSONAL HAIR DESIGN
          </span>

          <h2>
            당신의 분위기를 디자인하다.
          </h2>

          <p>
            하이유헤어 청당점
            <br />
            이해린 디자이너
          </p>

          <a
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
          >
            이해린 디자이너 네이버 예약 ↗
          </a>
        </section>
      </main>

      <footer className="dd-footer">
        HI U HAIR · CHEONGDANG
        <br />
        충남 천안시 동남구 청수4로 16, 2층 201호
        <br />
        <Link href="/">← 메인으로 돌아가기</Link>
      </footer>
    </div>
  );
}
