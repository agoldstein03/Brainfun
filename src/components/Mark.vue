<template>
    <div ref="backdrop" :style="this.marginProperties" :class="[ID + '-backdrop']">
      <div :key="value" v-html="renderMarks(boundaries, value)" :class="[ID + '-highlights', ID + '-content']">
        
      </div>
    </div>
</template>

<script>
 
export default {
  name: "Mark",
  props: [
    'config',
    'el',
    'value'
  ],
  data() {
    return {
      ID: 'hwt',
      browser: this.detectBrowser(),
      marginProperties: {},
      isGenerated: true,
      boundaries: [""]
    };
  },
  mounted() {
    //console.log({"el": this.el, "value": this.value})
    this.handleInput();
    this.$el.addEventListener('scroll', this.blockContainerScroll.bind(this));
		document.querySelector('#console .' + this.el).addEventListener('input', this.handleInput.bind(this));
    document.querySelector('#console .' + this.el).addEventListener('scroll', this.handleScroll.bind(this));
  },
  methods: {
    handleInput: function() {
        let input = this.value;//document.querySelector('#console .' + this.el).value;
        let ranges = this.getRanges(input, this.config);//this.$el.getElementsByClassName(this.ID + '-highlights')[0]);
        let unstaggeredRanges = this.removeStaggeredRanges(ranges);
        this.boundaries = this.getBoundaries(unstaggeredRanges);
    },
    handleScroll: function() {
      this.$refs.backdrop.scrollTop = document.querySelector('#console .' + this.el).scrollTop;

      // Chrome and Safari won't break long strings of spaces, which can cause
      // horizontal scrolling, this compensates by shifting highlights by the
      // horizontally scrolled amount to keep things aligned
      let scrollLeft = document.querySelector('#console .' + this.el).scrollLeft;
      this.$set(this.marginProperties, 'transform', (scrollLeft > 0) ? 'translateX(' + -scrollLeft + 'px)' : '');
    },
    detectBrowser: function() {
      let ua = window.navigator.userAgent.toLowerCase();
      if (ua.indexOf('firefox') !== -1) {
        this.fixFirefox();
        return 'firefox';
      } else if (ua.match(/msie|trident\/7|edge/)) {
        return 'ie';
      } else if (ua.match(/ipad|iphone|ipod/) && ua.indexOf('windows phone') === -1) {
        // Windows Phone flags itself as "like iPhone", thus the extra check

        return 'ios';
      } else {
        return 'other';
      }
    },
    getRanges(input, highlight) {
      let type = this.getType(highlight);
      switch (type) {
        case 'array':
          return this.getArrayRanges(input, highlight);
        case 'function':
          return this.getFunctionRanges(input, highlight);
        case 'regexp':
          return this.getRegExpRanges(input, highlight);
        case 'string':
          return this.getStringRanges(input, highlight);
        case 'range':
          return this.getRangeRanges(input, highlight);
        case 'custom':
          return this.getCustomRanges(input, highlight);
        default:
          if (!highlight) {
            // do nothing for falsey values
            return [];
          } else {
            console.error('unrecognized highlight type', highlight);
          }
      }
    },

  getArrayRanges: function(input, arr) {
    let ranges = arr.map(this.getRanges.bind(this, input));
    return Array.prototype.concat.apply([], ranges);
  },

  getFunctionRanges: function(input, func) {
    return this.getRanges(input, func(input));
  },

  getRegExpRanges: function(input, regex) {
    let ranges = [];
    let match;
    while (match = regex.exec(input), match !== null) {
      ranges.push([match.index, match.index + match[0].length]);
      if (!regex.global) {
        // non-global regexes do not increase lastIndex, causing an infinite loop,
        // but we can just break manually after the first match
        break;
      }
    }
    return ranges;
  },

  getStringRanges: function(input, str) {
    let ranges = [];
    let inputLower = input.toLowerCase();
    let strLower = str.toLowerCase();
    let index = 0;
    while (index = inputLower.indexOf(strLower, index), index !== -1) {
      ranges.push([index, index + strLower.length]);
      index += strLower.length;
    }
    //console.log({input, str, ranges});
    return ranges;
  },

  getRangeRanges: function(input, range) {
    return [range];
  },

  getCustomRanges: function(input, custom) {
    let ranges = this.getRanges(input, custom.highlight);
    if (custom.className) {
      ranges.forEach(function(range) {
        // persist class name as a property of the array
        if (range.className) {
          range.className = custom.className + ' ' + range.className;
        } else {
          range.className = custom.className;
        }
      });
    }
    return ranges;
  },

  // prevent staggered overlaps (clean nesting is fine)
  removeStaggeredRanges: function(ranges) {
    let unstaggeredRanges = [];
    ranges.forEach(function(range) {
      let isStaggered = unstaggeredRanges.some(function(unstaggeredRange) {
        let isStartInside = range[0] > unstaggeredRange[0] && range[0] < unstaggeredRange[1];
        let isStopInside = range[1] > unstaggeredRange[0] && range[1] < unstaggeredRange[1];
        return isStartInside !== isStopInside; // xor
      });
      if (!isStaggered) {
        unstaggeredRanges.push(range);
      }
    });
    return unstaggeredRanges;
  },

  getBoundaries: function(ranges) {
    let boundaries = [];
    ranges.forEach(function(range) {
      boundaries.push({
        type: 'start',
        index: range[0],
        className: range.className
      });
      boundaries.push({
        type: 'stop',
        index: range[1]
      });
    });

    this.sortBoundaries(boundaries);
    return boundaries;
  },

  sortBoundaries: function(boundaries) {
    // backwards sort (since marks are inserted right to left)
    boundaries.sort(function(a, b) {
      if (a.index !== b.index) {
        return b.index - a.index;
      } else if (a.type === 'stop' && b.type === 'start') {
        return 1;
      } else if (a.type === 'start' && b.type === 'stop') {
        return -1;
      } else {
        return 0;
      }
    });
  },

renderMarks(bounds, value) {
    let input = value;//document.querySelector('#console .' + this.el).value;
    bounds.forEach(function(boundary, index) {
      let markup;
      if (boundary.type === 'start') {
        markup = '{{hwt-mark-start|' + index + '}}';
      } else {
        markup = '{{hwt-mark-stop}}';
      }
      input = input.slice(0, boundary.index) + markup + input.slice(boundary.index);
    });

    // this keeps scrolling aligned when input ends with a newline
    input = input.replace(/\n({{hwt-mark-stop}})?$/, '\n\n$1');

    // encode HTML entities
    input = input.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    if (this.browser === 'ie') {
      // IE/Edge wraps whitespace differently in a div vs textarea, this fixes it
      input = input.replace(/ /g, ' <wbr>');
    }

    // replace start tokens with opening <mark> tags with class name
    input = input.replace(/{{hwt-mark-start\|(\d+)}}/g, function(match, submatch) {
      let className = bounds[+submatch].className;
      if (className) {
        return '<mark class="' + className + '">';
      } else {
        return '<mark>';
      }
    });

    // replace stop tokens with closing </mark> tags
    input = input.replace(/{{hwt-mark-stop}}/g, '</mark>');

    return input;
  },
  
  blockContainerScroll: function() {
    this.$el.scrollLeft = 0;
  },

  getType: function(instance) {
			let type = typeof instance;
			if (!instance) {
				return 'falsey';
			} else if (Array.isArray(instance)) {
				if (instance.length === 2 && typeof instance[0] === 'number' && typeof instance[1] === 'number') {
					return 'range';
				} else {
					return 'array';
				}
			} else if (type === 'object') {
				if (instance instanceof RegExp) {
					return 'regexp';
				} else if (Object.prototype.hasOwnProperty.call(instance, 'highlight')) {
					return 'custom';
				}
			} else if (type === 'function' || type === 'string') {
				return type;
			}

			return 'other';
    }
    
  }

};


/*
 * highlight-within-textarea
 *
 * @author  Will Boyd
 * @github  https://github.com/lonekorean/highlight-within-textarea
 */
/*
let HighlightWithinTextarea = function(el, config) {
  this.init(el, config);
};
*/
//HighlightWithinTextarea.prototype = {
  // browser sniffing sucks, but there are browser-specific quirks to handle
  // that are not a matter of feature detection

  // Firefox doesn't show text that scrolls into the padding of a textarea, so
  // rearrange a couple box models to make highlights behave the same way



  // in Chrome, page up/down in the textarea will shift stuff within the
  // container (despite the CSS), this immediately reverts the shift
  /*init: function(el, config) {
    this.el = el;

    // backwards compatibility with v1 (deprecated)
    if (this.getType(config) === 'function') {
      config = { highlight: config };
    }

    if (this.getType(config) === 'custom') {
      this.highlight = config;
      this.generate();
    } else {
      console.error('valid config object not provided');
    }
  },

  // returns identifier strings that aren't necessarily "real" JavaScript types
  getType: function(instance) {
    let type = typeof instance;
    if (!instance) {
      return 'falsey';
    } else if (Array.isArray(instance)) {
      if (instance.length === 2 && typeof instance[0] === 'number' && typeof instance[1] === 'number') {
        return 'range';
      } else {
        return 'array';
      }
    } else if (type === 'object') {
      if (instance instanceof RegExp) {
        return 'regexp';
      } else if (instance.hasOwnProperty('highlight')) {
        return 'custom';
      }
    } else if (type === 'function' || type === 'string') {
      return type;
    }

    return 'other';
  },
*/
//};







</script>

<style lang="scss">


.hwt-container {
	display: inline-block;
	position: relative;
	overflow: hidden !important;
	-webkit-text-size-adjust: none !important;
}

.hwt-backdrop {
	position: absolute !important;
	top: 0 !important;
	right: -99px !important;
	bottom: 0 !important;
	left: 0 !important;
	padding-right: 99px !important;
	overflow-x: hidden !important;
	overflow-y: auto !important;
}

.hwt-highlights {
	width: auto !important;
	height: auto !important;
	border-color: transparent !important;
	white-space: pre-wrap !important;
	word-wrap: break-word !important;
	//color: transparent !important;
	overflow: hidden !important;
}

.hwt-input, .md-textarea {
	display: block !important;
	position: relative !important;
	margin: 0;
	padding: 0;
	border-radius: 0;
	font: inherit;
	overflow-x: hidden !important;
	overflow-y: auto !important;
}

.hwt-content, .md-textarea {
	//border: 1px solid;
	background: none transparent !important;
}

.hwt-content mark {
	padding: 0 !important;
  //color: inherit;
  background-color: transparent;
}

.one {
  color: #48ffbc;
}

.two {
  color: #2eb5e7;
}

.three {
  color: #ff4b42;
}

.four {
  color: #ff9630;
}

.five {
  color: #cee50e;
}

.six {
  color: #009337;
}

.seven {
  color: #e02fcd;
}

.eight {
  color: #8b60ed;
}










</style>
