<template>
  <div class="container">
    <md-tabs class="md-transparent" md-alignment="fixed">
      <md-tab id="tab-task" md-label="TASK" exact>
        <h1>{{ this.$parent.lesson }} - {{ lessonData ? lessonData.lessonTitle : '' }}</h1>
        <p class="desc" v-bind:style="styleObject">{{ lessonData ? lessonData.directions : '' }}</p>
      </md-tab>

      <md-tab id="tab-references" md-label="REFERENCES">
        <pre v-bind:style="styleObject">Dec  Char     Dec  Char       Dec  Char	       Dec  Char
---------     ---------       ----------       ---------
32  SPACE	57  9		82  R		107  k
33  !		58  :		83  S		108  l
34  "		59  ;		84  T 		109  m
35  #		60  &lt;		85  U		110  n
36  $		61  =		86  V		111  o
37  %		62  &gt;		87  W		112  p
38  &amp;		63  ?		88  X		113  q
39  '		64  @		89  Y		114  r
40  (		65  A		90  Z 		115  s
41  )		66  B		91  [		116  t
42  *		67  C		92    		117  u
43  +		68  D		93  ]		118  v
44  ,		69  E		94  ^		119  w
45  -		70  F		95  _		120  x
46  .		71  G		96  `		121  y
47  /		72  H		97  a		122  z
48  0		73  I		98  b		123  {
49  1		74  J		99  c		124  |
50  2		75  K		100  d		125  }
51  3		76  L		101  e		126  ~
52  4		77  M		102  f		127  DEL
53  5		78  N		103  g
54  6		79  O		104  h
55  7		80  P		105  i
56  8  		81  Q		106  j</pre>
      </md-tab>

      <md-tab id="tab-hints" md-label="HINTS">
        <md-list>
          <md-list-item v-for="(hint, i) in lessonData.hints" :key="i" md-expand>
            <md-icon>lightbulb</md-icon>
            <span class="md-list-item-text">Hint #{{ i+1 }}</span>

            <md-list slot="md-expand">
              <md-list-item class="md-inset">{{ hint }}</md-list-item>
            </md-list>
          </md-list-item>
        </md-list>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>

export default {
  name: "Directions",
  props: [
    'lessonData',
    'lesson',
    'exercise'
  ],
  data: function() {
    return {
      styleObject: {
        lineHeight: "25px",
        fontSize: "20px"
      },
      //hints: [],
      //realLessonData: this.lessonData.doc(this.lesson+"."+this.exercise)
    };
  },
  created() {
    //this.hints = data.hints;
  },
  watch: {
    //lessonData(data) {
    //  this.hints = data.hints;
    //}
  },
  methods: {
    // changeExercise(lesson, ex) {

    // }
  },
};
</script>

<style lang="scss" scoped>

::v-deep .md-tabs-content {
  //min-height: 0;
  //overflow-y: scroll !important;
  height: unset !important;
  min-height: 0;
}

::v-deep .md-active {
  background-image: linear-gradient(to left, #ffa207, #ff901b, #ff7f2a, #ff6d36, #ff5b42, #ff4d4e, #ff3e5a, #ff2e67, #ff1f78, #ff0e8a, #ff039d, #ff0bb2);
  color:white !important;
}

.desc {
  white-space: pre-line;
}

.container {
  overflow: auto;
  height: 100%;
  box-shadow:
    inset 0px -9px 8px -10px black;
}
.content {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
