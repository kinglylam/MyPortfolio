import React from "react";
import "./Card.css";

const Card = ({ image, heading, detail }) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;

exports.resetPassword = async function (req, send) {
  const { resetLink, newPass } = req.body;
  if (resetLink) {
    jwt.verify(
      resetLink,
      process.env.RESET_PASSWORD_KEY,
      function (err, decodedData) {
        if (err) {
          return res.status(401).json({ msg: "Incorrect or expired token" });
        }
        user.findOne({ resetLink }, function (err, user) {
          if (err) {
            return res
              .status(400)
              .json({ msg: "user with this token does not exist" });
          }
          const obj = {
            password: newPass,
          };

          user = _.extend(user, obj);
          user.save(function (err, result) {
            if (err) {
              return res.status(400).json({ msg: "reset password error" });
            } else {
              return res
                .status(200)
                .json({ msg: "Your passwod has been changed" });
            }
          });
        });
      }
    );
  } else {
    return res.status(401).json({ msg: "Authentication error" });
  }
};
