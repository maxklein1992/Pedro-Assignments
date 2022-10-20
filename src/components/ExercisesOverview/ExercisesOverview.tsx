import React from "react";
import { Container } from "../UI";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import generalStyles from "./ExercisesOverview.general.module.scss";
import exerciseStyles from "./ExercisesOverview.exercise.module.scss";

const ExercisesOverview = ({}: any) => {
  const isTechnological = false;

  const spanishUrl = "https://cdn.countryflags.com/thumbs/spain/flag-800.png";
  const portugueseUrl =
    "https://www.countryflags.com/wp-content/uploads/portugal-flag-400.png";
  const dutchUrl =
    "https://www.countryflags.com/wp-content/uploads/netherlands-flag-png-large.png";

  const countries = [
    { id: 0, name: "Spain", url: spanishUrl },
    { id: 1, name: "Portugal", url: portugueseUrl },
    { id: 2, name: "Netherlands", url: dutchUrl },
  ];

  return (
    <Container>
      <h4 className={generalStyles.introTitle}>
        To become a technological person like your godmother 😜, here are your
        assignments.
      </h4>
      <div className={generalStyles.generalInstructionsContainer}>
        <h2 className={generalStyles.instructionsTitle}>
          General Instructions
        </h2>
        <p className={generalStyles.instructions}>
          Go to the 'ExercisesOverview' folder <br /> - The
          'ExercisesOverview.tsx' defines the content of this page. <br /> - The
          'ExercisesOverview.exercise.module.scss' defines the styling of this
          page.
        </p>
      </div>
      {/* Exercise #1 */}
      <div className={generalStyles.exerciseContainer}>
        <div className={generalStyles.exerciseInstructionsContainer}>
          <div className={generalStyles.instructionsTitleContainer}>
            <h2 className={generalStyles.instructionsTitle}>
              #1: Change background color
            </h2>
            <div className={generalStyles.exerciseRatingContainer}>
              <StarIcon
                className={generalStyles.exerciseRatingGold}
                fontSize="large"
              ></StarIcon>
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              ></StarBorderIcon>
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              ></StarBorderIcon>
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              ></StarBorderIcon>
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              ></StarBorderIcon>
            </div>
          </div>
          <h4 className={generalStyles.instructionsSubtitle}>Instructions</h4>
          <p className={generalStyles.instructions}>
            Change the color of the circle from{" "}
            <span className={generalStyles.isRed}>Red</span> to{" "}
            <span className={generalStyles.isBlue}>Blue</span>. The background
            color of a circle you can change with
            <code className={generalStyles.code}>background-color</code>
          </p>
        </div>
        <div className={generalStyles.exerciseOutputContainer}>
          <div className={exerciseStyles.exerciseOneCircle} />
        </div>
      </div>
      {/* Exercise #2 */}
      <div className={generalStyles.exerciseContainer}>
        <div className={generalStyles.exerciseInstructionsContainer}>
          <div className={generalStyles.instructionsTitleContainer}>
            <h2 className={generalStyles.instructionsTitle}>
              #2: Change size of text
            </h2>
            <div className={generalStyles.exerciseRatingContainer}>
              <StarIcon
                className={generalStyles.exerciseRatingGold}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
            </div>
          </div>
          <h4 className={generalStyles.instructionsSubtitle}>Instructions</h4>
          <p className={generalStyles.instructions}>
            Change the size of text from 16px to 40px with
            <code className={generalStyles.code}>font-size</code>
            <br />
            16px <span className={generalStyles.hasMediumSize}>32px</span>
            <span className={generalStyles.hasLargeSize}>64px</span>
          </p>
        </div>
        <div className={generalStyles.exerciseOutputContainer}>
          <p className={exerciseStyles.exerciseTwoText}>Text to change</p>
        </div>
      </div>
      {/* Exercise #3 */}
      <div className={generalStyles.exerciseContainer}>
        <div className={generalStyles.exerciseInstructionsContainer}>
          <div className={generalStyles.instructionsTitleContainer}>
            <h2 className={generalStyles.instructionsTitle}>
              #3: Change decoration of text
            </h2>
            <div className={generalStyles.exerciseRatingContainer}>
              <StarIcon
                className={generalStyles.exerciseRatingGold}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
            </div>
          </div>
          <h4 className={generalStyles.instructionsSubtitle}>Instructions</h4>
          <p className={generalStyles.instructions}>
            Change the decoration of text to underline with
            <code className={generalStyles.code}>text-decoration</code>
            <br />
            normal <span className={generalStyles.hasUnderline}>
              underline
            </span>{" "}
            <span className={generalStyles.hasLineThrough}>line-through</span>
          </p>
        </div>
        <div className={generalStyles.exerciseOutputContainer}>
          <p className={exerciseStyles.exerciseThreeText}>Text to change</p>
        </div>
      </div>
      {/* Exercise #4 */}
      <div className={generalStyles.exerciseContainer}>
        <div className={generalStyles.exerciseInstructionsContainer}>
          <div className={generalStyles.instructionsTitleContainer}>
            <h2 className={generalStyles.instructionsTitle}>
              #4: Change color of text
            </h2>
            <div className={generalStyles.exerciseRatingContainer}>
              <StarIcon
                className={generalStyles.exerciseRatingGold}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
            </div>
          </div>
          <h4 className={generalStyles.instructionsSubtitle}>Instructions</h4>
          <p className={generalStyles.instructions}>
            Change the color of text to green with
            <code className={generalStyles.code}>color</code>
            <br />
            <span className={generalStyles.isYellow}>yellow</span>{" "}
            <span className={generalStyles.isOrange}>orange</span>{" "}
            <span className={generalStyles.isRed}>red</span>
          </p>
        </div>
        <div className={generalStyles.exerciseOutputContainer}>
          <p className={exerciseStyles.exerciseFourText}>Text to change</p>
        </div>
      </div>
      {/* Exercise #5 */}
      <div className={generalStyles.exerciseContainer}>
        <div className={generalStyles.exerciseInstructionsContainer}>
          <div className={generalStyles.instructionsTitleContainer}>
            <h2 className={generalStyles.instructionsTitle}>
              #5: Correct the function
            </h2>
            <div className={generalStyles.exerciseRatingContainer}>
              <StarIcon
                className={generalStyles.exerciseRatingGold}
                fontSize="large"
              />
              <StarIcon
                className={generalStyles.exerciseRatingGold}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
            </div>
          </div>
          <h4 className={generalStyles.instructionsSubtitle}>Instructions</h4>
          <p className={generalStyles.instructions}>
            Correct the multiply function in the code, so in the
            'ExercisesOverview.tsx' file.
            <br />A multiply of 100 and 2 in javascript is written as
            <code className={generalStyles.code}>100 * 2</code>
          </p>
        </div>
        <div className={generalStyles.exerciseOutputContainer}>
          <p style={{ color: "white", fontSize: 34 }}>{`5 x 5 = ${5 * 4}`}</p>
        </div>
      </div>
      {/* Exercise #6 */}
      <div className={generalStyles.exerciseContainer}>
        <div className={generalStyles.exerciseInstructionsContainer}>
          <div className={generalStyles.instructionsTitleContainer}>
            <h2 className={generalStyles.instructionsTitle}>
              #6: Change font weight of text
            </h2>
            <div className={generalStyles.exerciseRatingContainer}>
              <StarIcon
                className={generalStyles.exerciseRatingGold}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
            </div>
          </div>
          <h4 className={generalStyles.instructionsSubtitle}>Instructions</h4>
          <p className={generalStyles.instructions}>
            Change the font-weight of text to bold with
            <code className={generalStyles.code}>font-weight</code>
            <br />
            normal <span className={generalStyles.isBold}>bold</span>{" "}
          </p>
        </div>
        <div className={generalStyles.exerciseOutputContainer}>
          <p className={exerciseStyles.exerciseSixText}>Text to change</p>
        </div>
      </div>
      {/* Exercise #7 */}
      <div className={generalStyles.exerciseContainer}>
        <div className={generalStyles.exerciseInstructionsContainer}>
          <div className={generalStyles.instructionsTitleContainer}>
            <h2 className={generalStyles.instructionsTitle}>
              #7: Add a border to a 'div'
            </h2>
            <div className={generalStyles.exerciseRatingContainer}>
              <StarIcon
                className={generalStyles.exerciseRatingGold}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
            </div>
          </div>
          <h4 className={generalStyles.instructionsSubtitle}>
            Extra information
          </h4>
          <p className={generalStyles.instructions}>
            The gray square is called a 'div' and contains content on a page.
          </p>
          <h4 className={generalStyles.instructionsSubtitle}>Instructions</h4>
          <div className={generalStyles.instructions}>
            Add a border of 8px and green color to the 'div' with
            <code className={generalStyles.code}>border</code>
            <br />
            For example:
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <code className={generalStyles.code}>
                border: 4px solid yellow;
              </code>
              <div className={generalStyles.hasYellowBorderDiv} />
            </div>
          </div>
        </div>
        <div className={generalStyles.exerciseOutputContainer}>
          <div
            className={exerciseStyles.exerciseSevenContainer}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "white" }}>Text</p>
          </div>
        </div>
      </div>
      {/* Exercise #8 */}
      <div className={generalStyles.exerciseContainer}>
        <div className={generalStyles.exerciseInstructionsContainer}>
          <div className={generalStyles.instructionsTitleContainer}>
            <h2 className={generalStyles.instructionsTitle}>
              #8: Use a boolean
            </h2>
            <div className={generalStyles.exerciseRatingContainer}>
              <StarIcon
                className={generalStyles.exerciseRatingGold}
                fontSize="large"
              />
              <StarIcon
                className={generalStyles.exerciseRatingGold}
                fontSize="large"
              />
              <StarIcon
                className={generalStyles.exerciseRatingGold}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
            </div>
          </div>
          <h4 className={generalStyles.instructionsSubtitle}>
            Extra information
          </h4>
          <p className={generalStyles.instructions}>
            A boolean is a variable which can be true or false. Most of the
            times the naming starts with 'is' or 'has'. You inititiaze the
            boolean in the top of the page. <br />
            For example:
            <br />
            <code className={generalStyles.code}>const isBlue = false;</code>
            <br />
            <br />
            <code className={generalStyles.code}>const isLoading = false;</code>
            <br />
            To show code under a condition, you will use the following format:
            <br />
            <code className={generalStyles.code}>
              isRed ? "Text when red" : "Text when it is not red"
            </code>
          </p>
          <h4 className={generalStyles.instructionsSubtitle}>Instructions</h4>
          <div className={generalStyles.instructions}>
            The text should be displayed as 'Sara is a technological person'
            instead of 'Sara is not a technological person'. <br /> In the top
            of the page I created a constant 'isTechnological'. Change this
            constant to true to make Sara a technological person.
          </div>
        </div>
        <div className={generalStyles.exerciseOutputContainer}>
          <p className={exerciseStyles.exerciseEightText}>
            {isTechnological
              ? "Sara is a technological person"
              : "Sara is not a technological person"}
          </p>
          {isTechnological ? (
            <iframe
              src="https://giphy.com/embed/uudzUtVcsLAoo"
              width="480"
              height="395"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
          ) : (
            <p className={generalStyles.isFalse}>Incorrect answer</p>
          )}
        </div>
      </div>
      {/* Exercise #8 */}
      <div className={generalStyles.exerciseContainer}>
        <div className={generalStyles.exerciseInstructionsContainer}>
          <div className={generalStyles.instructionsTitleContainer}>
            <h2 className={generalStyles.instructionsTitle}>
              #8: Use an object
            </h2>
            <div className={generalStyles.exerciseRatingContainer}>
              <StarIcon
                className={generalStyles.exerciseRatingGold}
                fontSize="large"
              />
              <StarIcon
                className={generalStyles.exerciseRatingGold}
                fontSize="large"
              />
              <StarIcon
                className={generalStyles.exerciseRatingGold}
                fontSize="large"
              />
              <StarIcon
                className={generalStyles.exerciseRatingGold}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
            </div>
          </div>
          <h4 className={generalStyles.instructionsSubtitle}>
            Extra information
          </h4>
          <p className={generalStyles.instructions}>
            Nice work so far! We will now go one step further! We will use an
            object 'country'. The goal is to show the flag and the name of the
            country Portugal. For showing the flag, we will use an image. This
            object has three 'properties', an 'id', 'name' and 'url' <br />
            <br />
          </p>
          <h4 className={generalStyles.instructionsSubtitle}>Instructions</h4>
          <div className={generalStyles.instructions}>
            Show the Portuguese name and flag.
          </div>
        </div>
        <div
          className={generalStyles.exerciseOutputContainer}
          key={countries[1].id}
        >
          <p className={exerciseStyles.exerciseEightText}>
            {countries[2].name}
          </p>
          <img src={countries[2].url} width="200" height="170" />
        </div>
      </div>
      {/* Exercise #9 */}
      <div className={generalStyles.exerciseContainer}>
        <div className={generalStyles.exerciseInstructionsContainer}>
          <div className={generalStyles.instructionsTitleContainer}>
            <h2 className={generalStyles.instructionsTitle}>#9: Use 'map'</h2>
            <div className={generalStyles.exerciseRatingContainer}>
              <StarIcon
                className={generalStyles.exerciseRatingGold}
                fontSize="large"
              />
              <StarIcon
                className={generalStyles.exerciseRatingGold}
                fontSize="large"
              />
              <StarIcon
                className={generalStyles.exerciseRatingGold}
                fontSize="large"
              />
              <StarIcon
                className={generalStyles.exerciseRatingGold}
                fontSize="large"
              />
              <StarBorderIcon
                className={generalStyles.exerciseRatingWhite}
                fontSize="large"
              />
            </div>
          </div>
          <h4 className={generalStyles.instructionsSubtitle}>
            Extra information
          </h4>
          <p className={generalStyles.instructions}>
            Keep it going! We now want to show all country names and flags next
            to eachother. We will use 'map' for that. <br />
            <br />
          </p>
          <h4 className={generalStyles.instructionsSubtitle}>Instructions</h4>
          <div className={generalStyles.instructions}>
            Show the names above the flag
          </div>
        </div>

        <div className={generalStyles.exerciseOutputContainer}>
          <div className={exerciseStyles.exerciseNineContainer}>
            {countries.map((country) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p className={exerciseStyles.exerciseNineText}>Country</p>
                <img src={country.url} width="100" height="85" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ExercisesOverview;
