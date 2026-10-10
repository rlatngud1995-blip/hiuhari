
"use client";

import { useState } from "react";
import Link from "next/link";
import "./reservation.css";

const PHONE = "01023277653";

const SERVICES = [
  "여성 커트",
  "하이레이어드컷 / C컬",
  "빌드펌 / 매트브라운",
  "물결펌 / 밀크브라운",
  "베이지브라운 염색",
  "루비레드컬러",
  "펌 상담",
  "염색 상담",
  "기타 / 방문 상담",
];

function localDate() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export default function ReservationPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [memo, setMemo] = useState("");
  const [agreed, setAgreed] = useState(false);

  const validPhone = /^01[016789]\d{7,8}$/.test(
    phone.replace(/\D/g, "")
  );

  function requestReservation(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!name.trim()) {
      alert("예약자 이름을 입력해 주세요.");
      return;
    }

    if (!validPhone) {
      alert("연락처를 정확히 입력해 주세요.");
      return;
    }

    if (!service || !date || !time) {
      alert("시술, 날짜, 시간을 선택해 주세요.");
      return;
    }

    if (date < localDate()) {
      alert("오늘 이후 날짜를 선택해 주세요.");
      return;
    }

    if (!agreed) {
      alert("개인정보 안내에 동의해 주세요.");
      return;
    }

    const message = [
      "[하이유헤어 이해린 디자이너 예약 요청]",
      "",
      `예약자: ${name.trim()}`,
      `연락처: ${phone}`,
      `희망 시술: ${service}`,
      `희망 날짜: ${date}`,
      `희망 시간: ${time}`,
      `요청사항: ${memo.trim() || "없음"}`,
      "",
      "예약 가능 여부 확인 부탁드립니다.",
    ].join("\n");

    const isiOS =
      /iPad|iPhone|iPod/i.test(navigator.userAgent);

    const separator = isiOS ? "&" : "?";

    window.location.href =
      `sms:${PHONE}${separator}body=${encodeURIComponent(message)}`;
  }

  return (
    <div className="reserve-page">
      <header className="reserve-header">
        <div className="reserve-header-inner">
          <Link href="/" className="reserve-brand">
            HI U HAIR
            <small>CHEONGDANG</small>
          </Link>

          <Link href="/" className="reserve-home">
            ← 홈으로
          </Link>
        </div>
      </header>

      <main>
        <section className="reserve-title">
          <p>PRIVATE HAIR DESIGN SERVICE</p>
          <h1>Reservation</h1>
          <span>이해린 디자이너 · 예약 신청</span>
        </section>

        <div className="reserve-layout">
          <form
            className="reserve-form"
            onSubmit={requestReservation}
          >
            <div className="reserve-step">
              01 / YOUR INFORMATION
            </div>

            <h2>예약자 정보</h2>

            <label htmlFor="r-name">고객명 *</label>
            <input
              id="r-name"
              type="text"
              maxLength={30}
              placeholder="성함을 입력해 주세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="r-phone">연락처 *</label>
            <input
              id="r-phone"
              type="tel"
              inputMode="tel"
              placeholder="010-0000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <div className="reserve-line" />

            <div className="reserve-step">
              02 / HAIR SERVICE
            </div>

            <h2>시술 선택</h2>

            <label htmlFor="r-service">
              희망 시술 *
            </label>

            <select
              id="r-service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">시술을 선택해 주세요</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <div className="reserve-line" />

            <div className="reserve-step">
              03 / PREFERRED DATE
            </div>

            <h2>희망 예약일</h2>

            <div className="reserve-two">
              <div>
                <label htmlFor="r-date">
                  희망 날짜 *
                </label>

                <input
                  id="r-date"
                  type="date"
                  min={localDate()}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="r-time">
                  희망 시간 *
                </label>

                <input
                  id="r-time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
            </div>

            <p className="reserve-hint">
              선택한 날짜와 시간은 예약 확정이 아닌
              희망 일정입니다. 운영시간과 예약 가능
              여부는 디자이너가 확인합니다.
            </p>

            <div className="reserve-line" />

            <div className="reserve-step">
              04 / ADDITIONAL REQUEST
            </div>

            <h2>요청사항</h2>

            <label htmlFor="r-memo">
              원하는 스타일 또는 상담 내용
            </label>

            <textarea
              id="r-memo"
              placeholder="현재 머리 길이, 원하는 스타일, 염색 이력 등을 적어 주세요."
              rows={5}
              maxLength={500}
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
            />

            <label className="reserve-consent">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) =>
                  setAgreed(e.target.checked)
                }
              />
              <span>
                예약 요청 문자에 고객명, 연락처,
                희망 시술 및 일정이 포함되는 것에
                동의합니다. 입력 내용은 이
                홈페이지 서버에 저장되지 않으며
                문자 앱으로 전달됩니다.
              </span>
            </label>

            <button
              className="reserve-submit"
              type="submit"
            >
              문자로 예약 신청하기 →
            </button>

            <p className="reserve-bottom-note">
              버튼을 누르면 문자 앱이 열립니다.
              문자 앱에서 실제로 전송해야
              신청이 전달됩니다.
              디자이너의 확인 답변 후 예약이
              확정됩니다.
            </p>
          </form>

          <aside className="reserve-aside">
            <div className="reserve-aside-card">
              <span>PERSONAL HAIR DESIGNER</span>
              <h2>
                HAERIN
                <br />
                LEE
              </h2>
              <p>하이유헤어 청당점 이해린 디자이너</p>

              <div className="reserve-aside-divider" />

              <h3>여성 헤어 디자인</h3>
              <p>
                여성 커트 · 레이어드컷
                <br />
                펌 · 헤어 컬러
              </p>

              <h3>LOCATION</h3>
              <p>
                충남 천안시 동남구 청수4로 16
                <br />
                2층 201호
              </p>

              <h3>CONTACT</h3>
              <p>010-2327-7653</p>

              <a href={`tel:${PHONE}`}>
                전화 문의하기 →
              </a>
              <a href={`sms:${PHONE}`}>
                간단 문자 문의 →
              </a>
            </div>
          </aside>
        </div>
      </main>

      <footer className="reserve-footer">
        © HI U HAIR CHEONGDANG
        <br />
        DESIGNER HAERIN LEE
      </footer>

      <div className="reserve-mobile-actions">
        <a href={`tel:${PHONE}`}>전화</a>
        <a href={`sms:${PHONE}`}>문자</a>
        <a href="#r-name">예약 신청 ↑</a>
      </div>
    </div>
  );
}
