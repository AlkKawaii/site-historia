import styles from "./BiographySect.module.css";

function BiographySect({
  imgBiography,
  name,
  biographyText,
  birth_date,
  death_date,
  references_arr,
}) {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <section className={styles.BiographySect}>
      <div className={styles.imgAndName}>
        <img
          src={imgBiography}
          alt="Personagem"
          className={styles.BiographyImage}
        />
        <h2 className={styles.BiographyName}>{name}</h2>
      </div>
      <div className={styles.textArea}>
        <p className={styles.BiographyText}>{biographyText}</p>
        <div className={styles.quickInformations}>
          <div className={styles.quickInformation}>
            <h3 className={styles.quickInformationTitle}>
              Data de nascimento:
            </h3>
            <p className={styles.quickInformationText}>{birth_date}</p>
          </div>
          <div className={styles.quickInformation}>
            <h3 className={styles.quickInformationTitle}>Data de morte:</h3>
            <p className={styles.quickInformationText}>{death_date}</p>
          </div>
          <div className={styles.quickInformation}>
            <h3 className={styles.quickInformationTitle}>Referência:</h3>
            <ul>
              {references_arr.map((reference, index) => {
                const domain =
                  reference.match(
                    /^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i
                  )?.[1] || reference;
                const mainDomain = domain.replace(
                  /^(?:.*\.)?([^.]+)\.[^.]+$/,
                  "$1"
                );
                return (
                  <li key={index} className={styles.quickInformationText}>
                    <a href={reference} target="_blank">
                      {capitalize(mainDomain)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BiographySect;
