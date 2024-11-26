import Image, { type ImageProps } from "next/image";
import styles from "./page.module.css";
import { Button } from "@repo/ui/components/ui/button";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ThemeImage
          className={styles.logo}
          srcLight="turborepo-dark.svg"
          srcDark="turborepo-light.svg"
          alt="Turborepo logo"
          width={180}
          height={38}
          priority
        />

        <Button variant="link">WEB Package Com ShadCN</Button>
        <Button variant="default">WEB Package Com ShadCN</Button>
        <Button variant="destructive">WEB Package Com ShadCN</Button>
        <Button variant="ghost">WEB Package Com ShadCN</Button>
        <Button variant="outline">WEB Package Com ShadCN</Button>
        <Button variant="secondary">WEB Package Com ShadCN</Button>
      </main>
    </div>
  );
}
