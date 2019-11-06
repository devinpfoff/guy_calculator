const config = {
  tension_factor: 1.1, // NESC conductor tension overload for Grade C
  wind_factor: 1.75, // NESC transverse wind overload for Grade C not at a crossing
  guy_rating: 8500, // Guy rating for a E1-3 down guy
  anchor_rating: 10000, // Anchor rating for a F1-3S screw anchor
  DT: {
    //Design Tensions for common conductors per Greg Wolven
    acsr2: 1425,
    acsr1_0: 2190,
    acsr3_0: 3310,
    acsr336: 4000
  },
  Wc: {
    // NESC conductor transverse wind load for Heavy district per Hi-Line documentation
    acsr2: 0.4417,
    acsr1_0: 0.466,
    acsr3_0: 0.521,
    acsr336: 0.5613
  },
  pole_type: {
    // Bending moments came from Hi-Line documentation
    '35_5': {
      height: 35,
      class: 5,
      bend_moment: 996
    },
    '40_4': {
      height: 40,
      class: 4,
      bend_moment: 1543
    },
    '45_2': {
      height: 45,
      class: 2,
      bend_moment: 2367
    },
    '45_3': {
      height: 45,
      class: 3,
      bend_moment: 2184
    },
    '50_2': {
      height: 50,
      class: 2,
      bend_moment: 2996
    },
    '50_3': {
      height: 50,
      class: 3,
      bend_moment: 2767
    },
    '55_3': {
      height: 55,
      class: 3,
      bend_moment: 3430
    },
    '60_2': {
      height: 60,
      class: 2,
      bend_moment: 4507
    }
  },
  assemblies: {
    // WIN Energy Spec drawing measurements (1983 RUS)
    A1: {
      primary_ht_1: -0.75,
      primary_ht_2: null,
      primary_ht_3: null,
      neutral_ht: 3.5,
      guy_ht: 2.25,
      min_angle: 0,
      max_angle: 5
    },
    'A1-1': {
      primary_ht_1: -0.75,
      primary_ht_2: null,
      primary_ht_3: null,
      neutral_ht: 3.5,
      guy_ht: 2.25,
      min_angle: 0,
      max_angle: 5
    },
    A2: {
      primary_ht_1: -0.75,
      primary_ht_2: null,
      primary_ht_3: null,
      neutral_ht: 3.5,
      guy_ht: 2.25,
      min_angle: 0,
      max_angle: 20
    },
    A3: {
      primary_ht_1: 0.75,
      primary_ht_2: null,
      primary_ht_3: null,
      neutral_ht: 4.75,
      guy_ht: 2.25,
      min_angle: 20,
      max_angle: 60
    },
    A5: {
      primary_ht_1: 0.75,
      primary_ht_2: null,
      primary_ht_3: null,
      neutral_ht: 4.75,
      guy_ht: 2.25,
      min_angle: 0,
      max_angle: 0
    },
    'A5-1': {
      primary_ht_1: 0.5,
      primary_ht_2: null,
      primary_ht_3: null,
      neutral_ht: 4.5,
      guy_ht: 2.0,
      min_angle: 0,
      max_angle: 0
    },
    A6: {
      primary_ht_1: 0.75,
      primary_ht_2: null,
      primary_ht_3: null,
      neutral_ht: 4.75,
      guy_ht: 2.25,
      min_angle: 0,
      max_angle: 0
    },
    A7: {
      primary_ht_1: 0.75,
      primary_ht_2: null,
      primary_ht_3: null,
      neutral_ht: 0.75,
      guy_ht: 1.5,
      min_angle: 0,
      max_angle: 0
    },
    'A7-1': {
      primary_ht_1: 0.75,
      primary_ht_2: null,
      primary_ht_3: null,
      neutral_ht: 0.75,
      guy_ht: 1.5,
      min_angle: 0,
      max_angle: 0
    },
    A7HX: {
      primary_ht_1: 0.75,
      primary_ht_2: null,
      primary_ht_3: null,
      neutral_ht: 0.75,
      guy_ht: 1.5,
      min_angle: 0,
      max_angle: 0
    },
    A8: {
      primary_ht_1: 0.75,
      primary_ht_2: null,
      primary_ht_3: null,
      neutral_ht: 0.75,
      guy_ht: 1.5,
      min_angle: 0,
      max_angle: 0
    },
    A9: {
      primary_ht_1: 0.0,
      primary_ht_2: null,
      primary_ht_3: null,
      neutral_ht: 0.0,
      guy_ht: 1.5,
      min_angle: 0,
      max_angle: 20
    },
    'A9-1': {
      primary_ht_1: 0.0,
      primary_ht_2: null,
      primary_ht_3: null,
      neutral_ht: 0.0,
      guy_ht: 1.5,
      min_angle: 0,
      max_angle: 5
    },
    B1: {
      primary_ht_1: 0.75,
      primary_ht_2: 0.75,
      primary_ht_3: null,
      neutral_ht: 3.5,
      guy_ht: 2.25,
      min_angle: 0,
      max_angle: 5
    },
    'B1-1': {
      primary_ht_1: 0.75,
      primary_ht_2: 0.75,
      primary_ht_3: null,
      neutral_ht: 3.5,
      guy_ht: 2.25,
      min_angle: 0,
      max_angle: 5
    },
    B2: {
      primary_ht_1: 0.75,
      primary_ht_2: 0.75,
      primary_ht_3: null,
      neutral_ht: 3.5,
      guy_ht: 2.25,
      min_angle: 0,
      max_angle: 20
    },
    B3: {
      primary_ht_1: 0.75,
      primary_ht_2: 4.75,
      primary_ht_3: null,
      neutral_ht: 8.75,
      guy_ht: 4.25,
      min_angle: 20,
      max_angle: 60
    },
    'B5-1': {
      primary_ht_1: 0.75,
      primary_ht_2: 4.75,
      primary_ht_3: null,
      neutral_ht: 8.75,
      guy_ht: 4.25,
      min_angle: 0,
      max_angle: 0
    },
    B7: {
      primary_ht_1: 0.75,
      primary_ht_2: 0.75,
      primary_ht_3: null,
      neutral_ht: 4.75,
      guy_ht: 1.5,
      min_angle: 0,
      max_angle: 0
    },
    'B7-1': {
      primary_ht_1: 0.75,
      primary_ht_2: 0.75,
      primary_ht_3: null,
      neutral_ht: 4.75,
      guy_ht: 1.5
    },
    B8: {
      primary_ht_1: 1.5,
      primary_ht_2: 1.5,
      primary_ht_3: null,
      neutral_ht: 3.33,
      guy_ht: 2.25,
      min_angle: 0,
      max_angle: 0
    },
    B9: {
      primary_ht_1: 0.0,
      primary_ht_2: 0.0,
      primary_ht_3: null,
      neutral_ht: 0.0,
      guy_ht: 1.5,
      min_angle: 0,
      max_angle: 20
    },
    'B9-1': {
      primary_ht_1: 0.0,
      primary_ht_2: 0.0,
      primary_ht_3: null,
      neutral_ht: 0.0,
      guy_ht: 1.5,
      min_angle: 0,
      max_angle: 5
    },
    'B9-2': {
      primary_ht_1: 0.0,
      primary_ht_2: 0.0,
      primary_ht_3: null,
      neutral_ht: 0.0,
      guy_ht: 1.5,
      min_angle: 0,
      max_angle: 20
    },
    'B9-3': {
      primary_ht_1: 0.0,
      primary_ht_2: 0.0,
      primary_ht_3: null,
      neutral_ht: 0.0,
      guy_ht: 1.5,
      min_angle: 0,
      max_angle: 20
    },
    C1: {
      primary_ht_1: -0.75,
      primary_ht_2: 0.75,
      primary_ht_3: 0.75,
      neutral_ht: 3.5,
      guy_ht: 2.25,
      min_angle: 0,
      max_angle: 5
    },
    'C1-1': {
      primary_ht_1: -0.75,
      primary_ht_2: 0.75,
      primary_ht_3: 0.75,
      neutral_ht: 3.5,
      guy_ht: 2.25,
      min_angle: 0,
      max_angle: 20
    },
    'C1-2': {
      primary_ht_1: -0.75,
      primary_ht_2: 0.75,
      primary_ht_3: 0.75,
      neutral_ht: 3.5,
      guy_ht: 2.25,
      min_angle: 0,
      max_angle: 2
    },
    'C1-3': {
      primary_ht_1: -0.75,
      primary_ht_2: 0.75,
      primary_ht_3: 0.75,
      neutral_ht: 3.5,
      guy_ht: 2.25,
      min_angle: 0,
      max_angle: 5
    },
    C2: {
      primary_ht_1: -0.75,
      primary_ht_2: 0.75,
      primary_ht_3: 0.75,
      neutral_ht: 3.5,
      guy_ht: 2.25,
      min_angle: 0,
      max_angle: 20
    },
    'C2-1': {
      primary_ht_1: 0.0,
      primary_ht_2: 0.0,
      primary_ht_3: 0.0,
      neutral_ht: 4.5,
      guy_ht: 1.5,
      min_angle: 0,
      max_angle: 20
    },
    'C2-2': {
      primary_ht_1: 0.0,
      primary_ht_2: 0.0,
      primary_ht_3: 0.0,
      neutral_ht: 4.5,
      guy_ht: 1.5,
      min_angle: 0,
      max_angle: 20
    },
    C3: {
      primary_ht_1: 0.75,
      primary_ht_2: 4.75,
      primary_ht_3: 8.75,
      neutral_ht: 12.75,
      guy_ht: 6.25,
      min_angle: 20,
      max_angle: 60
    },
    'C3-1': {
      primary_ht_1: 0.75,
      primary_ht_2: 4.75,
      primary_ht_3: 8.75,
      neutral_ht: 12.75,
      guy_ht: 6.75,
      min_angle: 10,
      max_angle: 20
    },
    'C5-1': {
      primary_ht_1: 0.75,
      primary_ht_2: 4.75,
      primary_ht_3: 8.75,
      neutral_ht: 12.75,
      guy_ht: 6.25,
      min_angle: 0,
      max_angle: 0
    },
    C7: {
      primary_ht_1: 0.75,
      primary_ht_2: 0.75,
      primary_ht_3: 0.75,
      neutral_ht: 4.75,
      guy_ht: 1.5,
      min_angle: 0,
      max_angle: 0
    },
    'C7-1': {
      primary_ht_1: 0.75,
      primary_ht_2: 0.75,
      primary_ht_3: 0.75,
      neutral_ht: 4.75,
      guy_ht: 1.5,
      min_angle: 0,
      max_angle: 0
    },
    C7HX: {
      primary_ht_1: 0.75,
      primary_ht_2: 0.75,
      primary_ht_3: 0.75,
      neutral_ht: 4.75,
      guy_ht: 1.5,
      min_angle: 0,
      max_angle: 0
    },
    C8: {
      primary_ht_1: 1.5,
      primary_ht_2: 0.33,
      primary_ht_3: 1.5,
      neutral_ht: 4.33,
      guy_ht: 2.25,
      min_angle: 0,
      max_angle: 0
    },
    'C8-1': {
      primary_ht_1: 0.75,
      primary_ht_2: 0.75,
      primary_ht_3: 0.75,
      neutral_ht: 0.75,
      guy_ht: 1.5,
      min_angle: 0,
      max_angle: 0
    },
    'C8-2': {
      primary_ht_1: 1.5,
      primary_ht_2: 0.33,
      primary_ht_3: 1.5,
      neutral_ht: 4.33,
      guy_ht: 2.25,
      min_angle: 0,
      max_angle: 0
    },
    'C8-3': {
      primary_ht_1: 1.5,
      primary_ht_2: 0.33,
      primary_ht_3: 1.5,
      neutral_ht: 4.33,
      guy_ht: 2.25,
      min_angle: 0,
      max_angle: 0
    },
    C9: {
      primary_ht_1: 0.0,
      primary_ht_2: 0.0,
      primary_ht_3: 0.0,
      neutral_ht: 0.0,
      guy_ht: 1.5,
      min_angle: 0,
      max_angle: 20
    },
    'C9-1': {
      primary_ht_1: 0.0,
      primary_ht_2: 0.0,
      primary_ht_3: 0.0,
      neutral_ht: 0.0,
      guy_ht: 1.5,
      min_angle: 0,
      max_angle: 5
    },
    'C9-2': {
      primary_ht_1: 0.0,
      primary_ht_2: 0.0,
      primary_ht_3: 0.0,
      neutral_ht: 0.0,
      guy_ht: 1.5,
      min_angle: 0,
      max_angle: 5
    },
    'C9-3': {
      primary_ht_1: 0.0,
      primary_ht_2: 0.0,
      primary_ht_3: 0.0,
      neutral_ht: 0.0,
      guy_ht: 1.5,
      min_angle: 0,
      max_angle: 5
    }
  }
};
