'use strict';
angular.module('slick', []).directive('slick', [
  '$timeout',
  function ($timeout) {
    return {
      restrict: 'AEC',
      scope: {
        initOnload: '@',
        data: '=',
        currentIndex: '=',
        accessibility: '@',
        adaptiveHeight: '@',
        arrows: '@',
        asNavFor: '@',
        appendArrows: '@',
        appendDots: '@',
        autoplay: '@',
        autoplaySpeed: '@',
        centerMode: '@',
        centerPadding: '@',
        cssEase: '@',
        customPaging: '&',
        dots: '@',
        dotsClass: '@',
        draggable: '@',
        easing: '@',
        edgeFriction: '@',
        fade: '@',
        focusOnSelect: '@',
        infinite: '@',
        initialSlide: '@',
        lazyLoad: '@',
        mobileFirst: '@',
        onBeforeChange: '=',
        onAfterChange: '=',
        onInit: '=',
        onReInit: '=',
        onSetPosition: '=',
        pauseOnHover: '@',
        pauseOnDotsHover: '@',
        responsive: '=',
        respondTo: '@',
        rtl: '@',
        rows: '@',
        slidesPerRow: '@',
        slide: '@',
        slidesToShow: '@',
        slidesToScroll: '@',
        speed: '@',
        swipe: '@',
        swipeToSlide: '@',
        touchMove: '@',
        touchThreshold: '@',
        useCSS: '@',
        variableWidth: '@',
        vertical: '@',
        verticalSwiping: '@',
        waitForAnimate: '@',
        prevArrow: '@',
        nextArrow: '@',
        zIndex: '@'
      },
      link: function (scope, element, attrs) {
        var destroySlick, initializeSlick, isInitialized;
        destroySlick = function () {
          return $timeout(function () {
            var slider;
            slider = $(element);
            slider.slick('unslick');
            slider.find('.slick-list').remove();
            return slider;
          });
        };
        initializeSlick = function () {
          return $timeout(function () {
            var currentIndex, customPaging, slider;
            slider = $(element);
            if (scope.currentIndex != null) {
              currentIndex = scope.currentIndex;
            }
            customPaging = function (slick, index) {
              return scope.customPaging({
                slick: slick,
                index: index
              });
            };
            slider.on('init', function (event, slick) {
                if (attrs.onInit) {
                    scope.onInit();
                }
                if (currentIndex != null) {
                    return slick.slideHandler(currentIndex);
                }
            });
            slider.on('reInit', function (event, slick) {
                if (attrs.onReInit) {
                    return scope.onReInit();
                }
            });
            slider.on('setPosition', function (event, slick) {
                if (attrs.onSetPosition) {
                    return scope.onSetPosition();
                }
            });
            slider.on('swipe', function (event, slick, direction) {
                if (attrs.onSwipe) {
                    return scope.onSwipe(direction);
                }
            });
            slider.on('afterChange', function (event, slick, currentSlide) {
                if (scope.onAfterChange) {
                    scope.onAfterChange(currentSlide);
                }
                if (currentIndex != null) {
                    return scope.$apply(function () {
                      currentIndex = currentSlide;
                      return scope.currentIndex = currentSlide;
                    });
                }
            });
            slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                if (attrs.onBeforeChange) {
                    return scope.onBeforeChange(currentSlide, nextSlide);
                }
            });
            slider.on('breakpoint', function (event, slick) {
                if (attrs.onBreakpoint) {
                    return scope.onBreakpoint();
                }
            });
            slider.on('destroy', function (event, slick) {
                if (attrs.onDestroy) {
                    return scope.onDestroy();
                }
            });
            slider.on('edge', function (event, slick, direction) {
                if (attrs.onEdge) {
                    return scope.onEdge(direction);
                }
            });
            slider.slick({
              accessibility: scope.accessibility !== 'false',
              adaptiveHeight: scope.adaptiveHeight === 'true',
              arrows: scope.arrows !== 'false',
              asNavFor: scope.asNavFor ? scope.asNavFor : void 0,
              appendArrows: scope.appendArrows ? $(scope.appendArrows) : $(element),
              appendDots: scope.appendDots ? $(scope.appendDots) : $(element),
              autoplay: scope.autoplay === 'true',
              autoplaySpeed: scope.autoplaySpeed != null ? parseInt(scope.autoplaySpeed, 10) : 3000,
              centerMode: scope.centerMode === 'true',
              centerPadding: scope.centerPadding || '50px',
              cssEase: scope.cssEase || 'ease',
              customPaging: attrs.customPaging ? customPaging : void 0,
              dots: scope.dots === 'true',
              dotsClass: scope.dotsClass || 'slick-dots',
              draggable: scope.draggable !== 'false',
              easing: scope.easing || 'linear',
              edgeFriction: scope.edgeFriction || 0.15,
              fade: scope.fade === 'true',
              focusOnSelect: scope.focusOnSelect === 'true',
              infinite: scope.infinite !== 'false',
              initialSlide: scope.initialSlide || 0,
              lazyLoad: scope.lazyLoad || 'ondemand',
              mobileFirst: scope.mobileFirst === 'true',
              pauseOnHover: scope.pauseOnHover !== 'false',
              pauseOnDotsHover: scope.pauseOnDotsHover === 'true',
              responsive: scope.responsive || void 0,
              rtl: scope.rtl === 'true',
              respondTo: scope.respondTo != null ? scope.respondTo : 'window',
              rows: scope.rows != null ? parseInt(scope.rows, 10) : 1,
              slidesPerRow: scope.slidesPerRow != null ? parseInt(scope.slidesPerRow, 10) : 1,
              slide: scope.slide || 'div',
              slidesToShow: scope.slidesToShow != null ? parseInt(scope.slidesToShow, 10) : 1,
              slidesToScroll: scope.slidesToScroll != null ? parseInt(scope.slidesToScroll, 10) : 1,
              speed: scope.speed != null ? parseInt(scope.speed, 10) : 300,
              swipe: scope.swipe !== 'false',
              swipeToSlide: scope.swipeToSlide === 'true',
              touchMove: scope.touchMove !== 'false',
              touchThreshold: scope.touchThreshold ? parseInt(scope.touchThreshold, 10) : 5,
              useCSS: scope.useCSS !== 'false',
              variableWidth: scope.variableWidth === 'true',
              vertical: scope.vertical === 'true',
              verticalSwiping: scope.verticalSwiping != null === 'true',
              waitForAnimate: scope.waitForAnimate != null !== 'true',
              zIndex: scope.zIndex != null ? parseInt(scope.zIndex, 10) : 1000,
              prevArrow: scope.prevArrow ? $(scope.prevArrow) : void 0,
              nextArrow: scope.nextArrow ? $(scope.nextArrow) : void 0
            });
            return scope.$watch('currentIndex', function (newVal, oldVal) {
              if (currentIndex != null && newVal != null && newVal !== currentIndex) {
                return slider.slick('slickGoTo', newVal);
              }
            });
          });
        };
        if (scope.initOnload) {
          isInitialized = false;
          return scope.$watch('data', function (newVal, oldVal) {
            if (newVal != null) {
              if (isInitialized) {
                destroySlick();
              }
              initializeSlick();
              return isInitialized = true;
            }
          });
        } else {
          return initializeSlick();
        }
      }
    };
  }
]);