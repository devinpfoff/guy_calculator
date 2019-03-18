// forms.js
//

const init = function() {
  document.getElementById("form-calc").addEventListener("submit", calculate);
};

const calculate = function(e) {
  e.preventDefault();
  e.stopPropagation();

  [
    overload,
    guyRating,
    anchorRating,
    acsr2,
    acsr10,
    acsr30,
    acsr336,
    poleClass,
    attachHeight,
    guyLead
  ] = document.getElementById("form-calc");

  const designTension = {
    acsr2: 1425,
    acsr10: 2190,
    acsr30: 3310,
    acsr336: 4000
  };

  const horizontalPull =
    parseInt(acsr2.value) * designTension.acsr2 +
    parseInt(acsr10.value) * designTension.acsr10 +
    parseInt(acsr30.value) * designTension.acsr30 +
    parseInt(acsr336.value) * designTension.acsr336;
    
  const hypotenuse = (
    (parseInt(guyLead.value) ** 2 + parseInt(attachHeight.value) ** 2) **
    0.5
  ).toFixed(2);

  const guyFactor = (hypotenuse / parseInt(guyLead.value)).toFixed(2);

  const guyCount = (
    (horizontalPull * guyFactor * parseFloat(overload.value)) /
    parseInt(guyRating.value)
  ).toFixed(2);

  const anchorCount = (
    (horizontalPull * guyFactor * parseFloat(overload.value)) /
    parseInt(anchorRating.value)
  ).toFixed(2);

  const anchorRequired = Math.ceil(anchorCount),
    guyRequired = Math.ceil(guyCount);

  const result_set = document.getElementById("result_set");

  result_set.innerHTML = `
    <p id="horizontal_pull">Horizontal Pull: ${horizontalPull}</p>
    <p id="guy_factor">Guy Factor: ${guyFactor}</p>
    <p id="hypotenuse">Hypotenuse: ${hypotenuse}</p>
    <p id="guy_count">Calculated Guys: ${guyCount}</p>
    <p id="anchor_count">Calculated Anchors: ${anchorCount}</p>
    <p id="guy_required">Guys Required: ${guyRequired}</p>
    <p id="anchor_required">Anchors required: ${anchorRequired}</p>
  `;
};

document.addEventListener("DOMContentLoaded", init);