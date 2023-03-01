import * as S from "./../styles/pages/index";
import getConfig from "next/config";

/**
 * Explanation
 * When configured this way, the environment variable is injected into the code at runtime, 
 * so that even public variables are not exposed.
 */

const { publicRuntimeConfig } = getConfig();

export default function Home(): JSX.Element {
  return (
    <S.Container>
      <h3>
        Testing environment variables at runtime with NextJS - Only for test 😉
      </h3>
      <p>
        <strong>SECRET_KEY:</strong> {publicRuntimeConfig.SECRET_KEY}
      </p>
    </S.Container>
  );
}
