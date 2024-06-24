export const arrayLevels = [
  {
    level: 1,
    title: 'Select two plates',
    tableItems: [
      {
        tag: 'plate',
        classNames: ['goal', 'tooltip'],
        tooltip: '<plate></plate>',
        numberNode: 1,
      },
      {
        tag: 'plate',
        classNames: ['goal', 'tooltip'],
        tooltip: '<plate></plate>',
        numberNode: 2,
      },
    ],
    HTMLViewer: [
      {
        tag: '<plate />',
        numberNode: 1,
      },
      {
        tag: '<plate />',
        numberNode: 2,
      },
    ],
    answer: ['plate', '*', '.table>plate', '.table>*'],
  },
  {
    level: 2,
    title: 'Select the napkins',
    tableItems: [
      {
        tag: 'napkin',
        classNames: ['goal', 'tooltip'],
        tooltip: '<napkin></napkin>',
        numberNode: 1,
      },
      {
        tag: 'plate',
        tooltip: '<plate></plate>',
        numberNode: 2,
      },
      {
        tag: 'napkin',
        classNames: ['goal', 'tooltip'],
        tooltip: '<napkin></napkin>',
        numberNode: 3,
      },
    ],
    HTMLViewer: [
      {
        tag: '<napkin />',
        numberNode: 1,
      },
      {
        tag: '<plate />',
        numberNode: 2,
      },
      {
        tag: '<napkin />',
        numberNode: 3,
      },
    ],
    answer: ['napkin'],
  },
  {
    level: 3,
    title: 'elect plate with blue border',
    tableItems: [
      {
        tag: 'plate',
        tooltip: '<plate></plate>',
        numberNode: 1,
      },
      {
        tag: 'plate',
        classNames: ['goal', 'tooltip'],
        tooltip: '<plate></plate>',
        numberNode: 2,
        attributes: {
          id: 'colored',
        },
      },
    ],
    HTMLViewer: [
      {
        tag: '<plate />',
        numberNode: 1,
      },
      {
        tag: '<plate id=`colored` />',
        numberNode: 2,
      },
    ],
    answer: ['#colored', '.table:last-child', 'plate#colored'],
  },
  {
    level: 4,
    title: 'Select apple on the plate',
    tableItems: [
      {
        tag: 'apple',
        tooltip: '<apple></apple>',
        numberNode: 1,
      },
      [
        {
          tag: 'plate',
          tooltip: '<plate></plate>',
          numberNode: 2,
        },
        {
          tag: 'apple',
          classNames: ['goal', 'tooltip'],
          tooltip: '<apple></apple>',
          numberNode: 3,
        },
      ],
    ],
    HTMLViewer: [
      {
        tag: '<apple />',
        numberNode: 1,
      },
      [
        {
          tag: '<plate>',
          numberNode: 2,
        },
        {
          tag: '<apple />',
          numberNode: 3,
        },
        {
          tag: '</plate>',
          numberNode: 2,
        },
      ],
    ],

    answer: ['plate>apple', 'plate>*'],
  },
  {
    level: 5,
    title: 'Select small apples',
    tableItems: [
      {
        tag: 'apple',
        tooltip: '<apple></apple>',
        numberNode: 1,
      },
      {
        tag: 'apple',
        classNames: ['small', 'goal', 'tooltip'],
        tooltip: '<apple></apple>',
        numberNode: 2,
      },
      [
        {
          tag: 'plate',
          tooltip: '<plate></plate>',
          numberNode: 3,
        },
        {
          tag: 'apple',
          classNames: ['small', 'goal', 'tooltip'],
          tooltip: '<apple></apple>',
          numberNode: 4,
        },
      ],
    ],
    HTMLViewer: [
      {
        tag: '<apple />',
        numberNode: 1,
      },
      {
        tag: '<apple class=`small` />',
        numberNode: 2,
      },
      [
        {
          tag: '<plate>',
          numberNode: 3,
        },
        {
          tag: '<apple class=`small` />',
          numberNode: 4,
        },
        {
          tag: '</plate>',
          numberNode: 3,
        },
      ],
    ],
    answer: ['.small', 'apple.small'],
  },
  {
    level: 6,
    title: 'Select small oranges on the plates',
    tableItems: [
      {
        tag: 'orange',
        tooltip: '<orange></orange>',
        numberNode: 1,
      },
      [
        {
          tag: 'plate',
          tooltip: '<plate></plate>',
          numberNode: 2,
        },
        {
          tag: 'orange',
          classNames: ['small', 'goal', 'tooltip'],
          tooltip: '<orange></orange>',
          numberNode: 3,
        },
      ],
      {
        tag: 'orange',
        classNames: ['small', 'tooltip'],
        tooltip: '<orange></orange>',
        numberNode: 4,
      },
      [
        {
          tag: 'plate',
          tooltip: '<plate></plate>',
          numberNode: 5,
        },
        {
          tag: 'orange',
          classNames: ['small', 'goal', 'tooltip'],
          tooltip: '<orange></orange>',
          numberNode: 6,
        },
      ],
    ],
    HTMLViewer: [
      {
        tag: '<orange />',
        numberNode: 1,
      },
      [
        {
          tag: '<plate>',
          numberNode: 2,
        },
        {
          tag: '<orange />',
          numberNode: 3,
        },
        {
          tag: '</plate>',
          numberNode: 2,
        },
      ],
      {
        tag: '<orange />',
        numberNode: 4,
      },
      [
        {
          tag: '<plate>',
          numberNode: 5,
        },
        {
          tag: '<orange />',
          numberNode: 6,
        },
        {
          tag: '</plate>',
          numberNode: 5,
        },
      ],
    ],
    answer: ['plate>orange.small', 'plate>orange', 'plate>orange'],
  },
  {
    level: 7,
    title: 'Select apple and plate',
    tableItems: [
      {
        tag: 'apple',
        classNames: ['goal', 'tooltip'],
        tooltip: '<apple></apple>',
        numberNode: 1,
      },
      {
        tag: 'napkin',
        tooltip: '<napkin></napkin>',
        numberNode: 2,
      },
      {
        tag: 'plate',
        classNames: ['goal', 'tooltip'],
        tooltip: '<plate></plate>',
        numberNode: 3,
      },
      {
        tag: 'orange',
        tooltip: '<orange></orange>',
        numberNode: 4,
      },
    ],
    HTMLViewer: [
      {
        tag: '<apple />',
        numberNode: 1,
      },
      {
        tag: '<napkin />',
        numberNode: 2,
      },
      {
        tag: '<plate />',
        numberNode: 3,
      },
      {
        tag: '<orange />',
        numberNode: 4,
      },
    ],
    answer: ['apple, plate', 'plate, apple'],
  },
  {
    level: 8,
    title: 'Select all elements',
    tableItems: [
      {
        tag: 'apple',
        classNames: ['goal', 'tooltip'],
        tooltip: '<apple></apple>',
        numberNode: 1,
      },
      {
        tag: 'napkin',
        classNames: ['goal', 'tooltip'],
        tooltip: '<napkin></napkin>',
        numberNode: 2,
      },
      {
        tag: 'plate',
        classNames: ['goal', 'tooltip'],
        tooltip: '<plate></plate>',
        numberNode: 3,
        attributes: {
          id: 'colored',
        },
      },
      {
        tag: 'orange',
        classNames: ['goal', 'tooltip'],
        tooltip: '<orange></orange>',
        numberNode: 4,
      },
    ],
    HTMLViewer: [
      {
        tag: '<apple />',
        numberNode: 1,
      },
      {
        tag: '<napkin />',
        numberNode: 2,
      },
      {
        tag: '<plate id=`colored`/>',
        numberNode: 3,
      },
      {
        tag: '<orange />',
        numberNode: 4,
      },
    ],
    answer: ['*', '.table>*'],
  },
  {
    level: 9,
    title: 'Select all things on the plates',
    tableItems: [
      [
        {
          tag: 'plate',
          tooltip: '<plate></plate>',
          numberNode: 1,
        },
        {
          tag: 'apple',
          classNames: ['small', 'goal', 'tooltip'],
          tooltip: '<apple></apple>',
          numberNode: 2,
        },
      ],
      [
        {
          tag: 'plate',
          tooltip: '<plate></plate>',
          numberNode: 3,
        },
        {
          tag: 'orange',
          classNames: ['small', 'goal', 'tooltip'],
          tooltip: '<orange></orange>',
          numberNode: 4,
        },
      ],
      [
        {
          tag: 'plate',
          tooltip: '<plate></plate>',
          numberNode: 5,
        },
        {
          tag: 'cucumber',
          classNames: ['goal', 'tooltip'],
          tooltip: '<cucumber></cucumber>',
          numberNode: 6,
        },
      ],
      {
        tag: 'orange',
        tooltip: '<orange></orange>',
        numberNode: 7,
      },
    ],
    HTMLViewer: [
      [
        {
          tag: '<plate />',
          numberNode: 1,
        },
        {
          tag: '<apple />',
          numberNode: 2,
        },
        {
          tag: '</plate>',
          numberNode: 1,
        },
      ],
      [
        {
          tag: '<plate />',
          numberNode: 3,
        },
        {
          tag: '<orange />',
          numberNode: 4,
        },
        {
          tag: '</plate>',
          numberNode: 3,
        },
      ],
      [
        {
          tag: '<plate />',
          numberNode: 5,
        },
        {
          tag: '<cucumber />',
          numberNode: 6,
        },
        {
          tag: '</plate>',
          numberNode: 5,
        },
      ],
      {
        tag: '<orange />',
        numberNode: 7,
      },
    ],
    answer: ['plate>*'],
  },
  {
    level: 10,
    title: 'Select the first apple after plate',
    tableItems: [
      {
        tag: 'plate',
        tooltip: '<plate></plate>',
        numberNode: 1,
      },
      {
        tag: 'apple',
        classNames: ['small', 'goal', 'tooltip'],
        tooltip: '<apple></apple>',
        numberNode: 2,
      },
      {
        tag: 'plate',
        tooltip: '<plate></plate>',
        numberNode: 3,
      },
      {
        tag: 'apple',
        classNames: ['small', 'goal', 'tooltip'],
        tooltip: '<apple></apple>',
        numberNode: 4,
      },
      {
        tag: 'apple',
        classNames: ['small'],
        tooltip: '<apple></apple>',
        numberNode: 5,
      },
    ],
    HTMLViewer: [
      {
        tag: '<plate />',
        numberNode: 1,
      },
      {
        tag: '<apple />',
        numberNode: 2,
      },
      {
        tag: '<plate />',
        numberNode: 3,
      },
      {
        tag: '<apple />',
        numberNode: 4,
      },
      {
        tag: '<apple />',
        numberNode: 5,
      },
    ],
    answer: ['plate+apple'],
  },
];
