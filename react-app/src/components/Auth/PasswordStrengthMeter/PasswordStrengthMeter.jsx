import * as zxcvbn from "zxcvbn";

const PasswordStrengthMeter = ({password}) => {
    const testedResult = zxcvbn(password)


    const createPasswordLabel = (result) => {
        switch (result.score) {
          case 0:
            return <div className="font-bold text-red-500">Weak</div>
          case 1:
            return <div className="font-bold text-red-500">Weak</div>;
          case 2:
            return <div className="font-bold text-yellow-500">Fair</div>;
          case 3:
            return <div className="font-bold text-green-500">Good</div>;
          case 4:
            return <div className="font-bold text-green-500">STRONG!</div>;
          default:
            return <div className="font-bold text-red-500">Weak</div>;
        }
      }

      return (
        <div className="password-strength-meter">
          {password && (
            <meter
                value={testedResult.score}
                max="4"
                className="w-11/12 mt-2"
            />
            )}
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
