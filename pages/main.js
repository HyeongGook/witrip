import { useState } from "react";
import styles from "../styles/Main.module.css";
import Image from "next/image";
import logo from "../public/src/logo.png";
const Main = () => {
  const [copyCoupon, setCopy] = useState("EH2DSK8SJDKS7SJDLS4SJD3SDM9");
  const [isCopy, setIsCopy] = useState(false);
  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(copyCoupon);
      setCopy("쿠폰번호 복사 성공!");
      setIsCopy(true);
    } catch (error) {}
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={logo} />
        </div>
        <div className={styles.titleContainer}>
          <p className={styles.title}>우리끼리, 위트 있는 여행{`\n`}witrip</p>
        </div>
        <div className={styles.explainContainer}>
          <p className={styles.explain}>아직 출시 준비중인 서비스입니다.</p>
          <p className={styles.explain}>
            출시 후, 앱에 다음 쿠폰을 입력하시면 할인 쿠폰 등 사전 혜택을
            드리겠습니다!
          </p>
          <p className={styles.explain}>관심가져주셔서 감사합니다!</p>
        </div>
        <div className={styles.couponContainer}>
          <input
            readOnly
            value={copyCoupon}
            onClick={() => {
              if (!isCopy) handleCopyClipBoard();
            }}
            className={styles.coupon}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Main;
