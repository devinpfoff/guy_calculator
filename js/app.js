const init = () => {
  toggleInputDisplay();
  setHeightLength();
  calculate();

  document.getElementById('form-calc').addEventListener('change', e => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.id === 'guy_type') {
      toggleInputDisplay();
    }
    if (e.target.id === 'pole_top' || e.target.id === 'pole_type') {
      setHeightLength();
    }
    calculate(e);
  });
};

const setHeightLength = () => {
  const poleTop = document.getElementById('pole_top').value,
    poleType = document.getElementById('pole_type').value,
    guyLead = document.getElementById('guy_lead'),
    attachHt = document.getElementById('attach_ht'),
    height_ag =
      config.pole_type[poleType].height -
      (config.pole_type[poleType].height * 0.1 + 2);

  guyLead.value = attachHt.value =
    height_ag - config.assemblies[poleTop].guy_ht;
};

const toggleInputDisplay = () => {
  const guyType = document.getElementById('guy_type').value,
    inputs = document.querySelectorAll('.input_toggle'),
    tops = document.getElementById('pole_top');
  if (guyType === 'dead_end') {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.display = 'none';
    }
    tops.options.length = 0;
    tops.innerHTML = `<option class="deadend_top" value="A5">A5</option>
    <option class="deadend_top" value="A5-1">A5-1</option>
    <option class="deadend_top" value="A6">A6</option>
    <option class="deadend_top" value="A7">A7</option>
    <option class="deadend_top" value="A7-1">A7-1</option>
    <option class="deadend_top" value="A7HX">A7HX</option>
    <option class="deadend_top" value="A8">A8</option>
    <option class="deadend_top" value="B5-1">B5-1</option>
    <option class="deadend_top" value="B7">B7</option>
    <option class="deadend_top" value="B7-1">B7-1</option>
    <option class="deadend_top" value="B8">B8</option>
    <option class="deadend_top" value="C5-1">C5-1</option>
    <option class="deadend_top" value="C7" selected>C7</option>
    <option class="deadend_top" value="C7-1">C7-1</option>
    <option class="deadend_top" value="C7HX">C7HX</option>
    <option class="deadend_top" value="C8">C8</option>
    <option class="deadend_top" value="C8-1">C8-1</option>
    <option class="deadend_top" value="C8-2">C8-2</option>
    <option class="deadend_top" value="C8-3">C8-3</option>`;
  }
  if (guyType === 'line_angle') {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.display = '';
    }
    tops.options.length = 0;
    tops.innerHTML = `<option class="lineangle_top" value="A1">A1</option>
    <option class="lineangle_top" value="A1-1">A1-1</option>
    <option class="lineangle_top" value="A2">A2</option>
    <option class="lineangle_top" value="A3">A3</option>
    <option class="lineangle_top" value="A9">A9</option>
    <option class="lineangle_top" value="A9-1">A9-1</option>
    <option class="lineangle_top" value="B1">B1</option>
    <option class="lineangle_top" value="B1-1">B1-1</option>
    <option class="lineangle_top" value="B2">B2</option>
    <option class="lineangle_top" value="B3">B3</option>
    <option class="lineangle_top" value="B9">B9</option>
    <option class="lineangle_top" value="B9-1">B9-1</option>
    <option class="lineangle_top" value="B9-2">B9-2</option>
    <option class="lineangle_top" value="B9-3">B9-3</option>
    <option class="lineangle_top" value="C1">C1</option>
    <option class="lineangle_top" value="C1-1">C1-1</option>
    <option class="lineangle_top" value="C1-2">C1-2</option>
    <option class="lineangle_top" value="C1-3">C1-3</option>
    <option class="lineangle_top" value="C2">C2</option>
    <option class="lineangle_top" value="C2-1">C2-2</option>
    <option class="lineangle_top" value="C3">C3</option>
    <option class="lineangle_top" value="C3-1">C3-1</option>
    <option class="lineangle_top" value="C9">C9</option>
    <option class="lineangle_top" value="C9-1">C9-1</option>
    <option class="lineangle_top" value="C9-2">C9-2</option>
    <option class="lineangle_top" value="C9-3">C9-3</option>
    `;
  }
};

const calculateDeadEnd = () => {
  const primary = document.getElementById('primary').value,
    neutral = document.getElementById('neutral').value,
    poleTop = document.getElementById('pole_top').value,
    poleType = document.getElementById('pole_type').value,
    guyLead = document.getElementById('guy_lead').valueAsNumber,
    attachHt = document.getElementById('attach_ht').valueAsNumber,
    poleHt = config.pole_type[poleType].height,
    height_ag = poleHt - (poleHt * 0.1 + 2),
    primaryDT = config.DT[primary],
    neutralDT = config.DT[neutral],
    assembly = config.assemblies[poleTop];

  let tensionMoment = 0.0;
  if (assembly.primary_ht_1 != null) {
    tensionMoment +=
      primaryDT * (height_ag - assembly.primary_ht_1) * config.tension_factor;
  }
  if (assembly.primary_ht_2 != null) {
    tensionMoment +=
      primaryDT * (height_ag - assembly.primary_ht_2) * config.tension_factor;
  }
  if (assembly.primary_ht_3 != null) {
    tensionMoment +=
      primaryDT * (height_ag - assembly.primary_ht_3) * config.tension_factor;
  }
  if (assembly.neutral_ht != null) {
    tensionMoment +=
      neutralDT * (height_ag - assembly.neutral_ht) * config.tension_factor;
  }

  const horizontalPull = (tensionMoment / attachHt).toFixed(2),
    guyLength = ((guyLead ** 2 + attachHt ** 2) ** 0.5).toFixed(2),
    guyFactor = (guyLength / guyLead).toFixed(2),
    guyLoad = (horizontalPull * guyFactor).toFixed(2),
    guyCount = (guyLoad / config.guy_rating).toFixed(2),
    anchorCount = (guyLoad / config.anchor_rating).toFixed(2),
    anchorRequired = Math.ceil(anchorCount),
    guyRequired = Math.ceil(guyCount),
    result_set = document.getElementById('result_set');

  result_set.innerHTML = `
    <p id="horizontal_pull">Horizontal Pull: <b>${horizontalPull} lbs.</b></p>
    <p id="guy_factor">Guy Factor: <b>${guyFactor}</b></p>
    <p id="guy_count">Calculated Guys: <b><span class="required">(Use ${guyRequired})</span> ${guyCount}</b></p>
    <p id="anchor_count">Calculated Anchors: <b><span class="required">(Use ${anchorRequired})</span> ${anchorCount}</b></p>
  `;
};

const calculateLineAngle = () => {
  const primary = document.getElementById('primary').value,
    neutral = document.getElementById('neutral').value,
    poleTop = document.getElementById('pole_top').value,
    poleType = document.getElementById('pole_type').value,
    attachHt = document.getElementById('attach_ht').valueAsNumber,
    guyLead = document.getElementById('guy_lead').valueAsNumber,
    backspan = document.getElementById('backspan').valueAsNumber,
    headspan = document.getElementById('headspan').valueAsNumber,
    lineAngle = document.getElementById('line_angle').valueAsNumber,
    poleHt = config.pole_type[poleType].height,
    SineAngle = Math.sin((lineAngle * Math.PI) / 180 / 2).toFixed(4),
    height_ag = poleHt - (poleHt * 0.1 + 2),
    primaryDT = config.DT[primary],
    neutralDT = config.DT[neutral],
    primaryWc = config.Wc[primary],
    neutralWc = config.Wc[neutral],
    assembly = config.assemblies[poleTop];

  const windSpan = (backspan + headspan) / 2;

  let conductorMoment = 0.0;
  if (assembly.primary_ht_1) {
    conductorMoment +=
      primaryWc * (height_ag - assembly.primary_ht_1) * config.wind_factor;
  }
  if (assembly.primary_ht_2) {
    conductorMoment +=
      primaryWc * (height_ag - assembly.primary_ht_2) * config.wind_factor;
  }
  if (assembly.primary_ht_3) {
    conductorMoment +=
      primaryWc * (height_ag - assembly.primary_ht_3) * config.wind_factor;
  }
  if (assembly.neutral_ht) {
    conductorMoment +=
      neutralWc * (height_ag - assembly.neutral_ht) * config.wind_factor;
  }

  let tensionMoment = 0.0;
  if (assembly.primary_ht_1 != null) {
    tensionMoment +=
      SineAngle *
      primaryDT *
      2 *
      (height_ag - assembly.primary_ht_1) *
      config.tension_factor;
  }
  if (assembly.primary_ht_2 != null) {
    tensionMoment +=
      SineAngle *
      primaryDT *
      2 *
      (height_ag - assembly.primary_ht_2) *
      config.tension_factor;
  }
  if (assembly.primary_ht_3 != null) {
    tensionMoment +=
      SineAngle *
      primaryDT *
      2 *
      (height_ag - assembly.primary_ht_3) *
      config.tension_factor;
  }
  if (assembly.neutral_ht != null) {
    tensionMoment +=
      SineAngle *
      neutralDT *
      2 *
      (height_ag - assembly.neutral_ht) *
      config.tension_factor;
  }

  const poleMoment =
      config.pole_type[poleType].bend_moment * config.wind_factor,
    horizontalPull = (
      (windSpan * conductorMoment + tensionMoment + poleMoment) /
      attachHt
    ).toFixed(2),
    guyLength = ((guyLead ** 2 + attachHt ** 2) ** 0.5).toFixed(2),
    guyFactor = (guyLength / guyLead).toFixed(2),
    guyCount = ((horizontalPull * guyFactor) / config.guy_rating).toFixed(2),
    guyLoad = horizontalPull * guyFactor,
    anchorCount = (guyLoad / config.anchor_rating).toFixed(2),
    anchorRequired = Math.ceil(anchorCount),
    guyRequired = Math.ceil(guyCount),
    result_set = document.getElementById('result_set');

  result_set.innerHTML = `
    <p id="horizontal_pull">Horizontal Pull: <b>${horizontalPull} lbs.</b></p>
    <p id="guy_factor">Guy Factor: <b>${guyFactor}</b></p>
    <p id="guy_count">calculated Guys: <b><span class="required">(Use ${guyRequired})</span> ${guyCount}</b></p>
    <p id="anchor_count">calculated Anchors: <b><span class="required">(Use ${anchorRequired})</span> ${anchorCount}</b></p>
  `;
  // console.log(
  //   `Sw: ${windSpan}\nMc: ${conductorMoment}\nMt: ${tensionMoment}\nMb: ${poleMoment}\nGuy Load: ${guyLoad}\nSineAngle: ${SineAngle}`
  // );
};

const calculate = e => {
  if (document.getElementById('guy_type').value === 'dead_end') {
    calculateDeadEnd(e);
  } else {
    calculateLineAngle(e);
  }
};

document.addEventListener('DOMContentLoaded', init);
