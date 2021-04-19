import "./PasswordStrengthMeter.css";
import * as zxcvbn from "zxcvbn";

const PasswordStrengthMeter = ({password}) => {
    const testedResult = zxcvbn(password)


    const createPasswordLabel = (result) => {
        switch (result.score) {
          case 0:
            return <p>Weak</p>
          case 1:
            return 'Weak';
          case 2:
            return 'Fair';
          case 3:
            return 'Good';
          case 4:
            return 'Strong';
          default:
            return 'Weak';
        }
      }

      return (
        <div className="password-strength-meter">
            <progress
                value={testedResult.score}
                max="4"
                className="w-11/12 mt-2"
            />
        <br />
        <label
          className="password-strength-meter-label"
        >
            {password && (
                <>
                <p className="font-bold">Password strength:</p> {createPasswordLabel(testedResult)}
                </>
            )}
        </label>
      </div>
      );
    }

  export default PasswordStrengthMeter;
