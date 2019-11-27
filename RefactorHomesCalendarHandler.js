Zammad.Handlers.Homes.HomesCalendarHandler = {
  hasBeenShow: false,
  init: () => {
    this.initEvents();
  },
  initEvents: () => {
    const checkBloqued = $('.js-check-if-is-blocked[value = "true"]');

    this.setDaysHoverEvent();
    this.setDaysClickEvent();
    this.setTimesHoverEvent();
    this.setTimesClickEvent();
    this.setBlockButtonEvent();
    this.setDesBlockButtonEvent();
    this.setTimeEvents();
    this.closeMagnificButton();

    checkBloqued.parent().addClass('selected');
  },
  setDaysHoverEvent: () => {
    const timesContainerCalender = $(`.js-times-container[data-day = "${index}"].time-calendar`);

    $('.js-day-button').hover(
      () => {
        const btn = $(this);

        timesContainerCalender.addClass('active');
        btn.addClass('active');
      },
      () => {
        const btn = $(this);

        timesContainerCalender.removeClass('active');
        btn.removeClass('active');
    });
  },
  setDaysClickEvent: () => {
    const timesContainerCalendar = $(`.js-times-container[data-day = "${index}"].time-calendar`);
    const timesContainerBlock = $(`.js-times-container[data-day = "${index}"].js-change-block`);
    const timesContainerTime = $(`.js-times-container[data-day = "${index}"].js-change-time`);

    $('.js-day-button').on('click', () => {
      const btn = $(this);
      const buttonHasClass = btn.hasClass('is-blocked');

      timesContainerCalendar.toggleClass('selected');
      btn.toggleClass('is-blocked');

      timesContainerBlock.prop('checked', !buttonHasClass);
      timesContainerTime.prop('checked', !buttonHasClass);
    });
  },
  setTimesHoverEvent: () => {
    const timeButton = $(`.js-time-button[data-time = "${index}"]`);

    $('.js-times-button').hover(
      () => {
        const btn = $(this);

        timeButton.addClass('active');
        btn.addClass('active');
      }, 
      () => {
        const btn = $(this);

        timeButton.removeClass('active');
        btn.removeClass('active');
    });
  },
  setTimesClickEvent: () => {
    const timeButton = $(`.js-time-button[data-time = "${index}"]`);
    const timeButtonChange = $(`.js-time-button[data-time = "${index}"] .js-change-time`);

    $('.js-times-button').on('click', () => {
      const btn = $(this);
      const buttonHasClass = btn.hasClass('is-blocked');

      timeButton.toggleClass('selected');
      btn.toggleClass('is-blocked');

      timeButtonChange.prop('checked', !buttonHasClass);
    });
  },
  setBlockButtonEvent: () => {
    const dayButton = $(`.js-day-button[data-id = ${id}]`);
    const desblockButton = $('.js-desblock-btn');
    const timesChangeTime = $(`.js-times-container[data-day = ${id}] .js-change-time`);
    const timesChangeBlock = $(`.js-times-container[data-day = ${id}] .js-change-block`);
    const dayButtonComplete = $('.js-day-button.complete, .js-day-button.blocked');
    const buttonFinish = $('.js-finish-btn');

    $('.js-block-btn').on('click', () => {
      const daysOfWeek = 7;
      const btn = $(this);
      const id = btn.data('day');

      dayButton.removeClass('active');
      dayButton.addClass('blocked');
      btn.hide();
      desblockButton.show();
      timesChangeTime.each((id, checkBox) => {
        $(checkBox).prop('checked', true);
        $(checkBox).parent().addClass('selected');
      });
      timesChangeBlock.prop('checked', true);
      if (dayButtonComplete.length == daysOfWeek) { buttonFinish.show() }
    });
  },
  setDesBlockButtonEvent: () => {
    const dayButton = $(`.js-day-button[data-id = ${id}]`);
    const blockButton = $('.js-block-btn');
    const timesChangeTime = $(`.js-times-container[data-day = ${id}] .js-change-time`);
    const timesChangeBlock = $(`.js-times-container[data-day = ${id}] .js-change-block`);

    $('.js-desblock-btn').on('click', () => {
      const btn = $(this);
      const id = btn.data('day');

      dayButton.addClass('active');
      dayButton.removeClass('blocked');
      btn.hide();
      blockButton.show();
      timesChangeTime.each((id, checkBox) => {
        $(checkBox).prop('checked', false);
        $(checkBox).parent().removeClass('selected');
      });
      timesChangeBlock.prop('checked', false);
    })
  },
  setFinishButtonEvent: () => {
    $('.js-finish-btn').on('click', () => {
      $.magnificPopup.open({
        items: {
          src: '#calendar-finish-modal',
          type: 'inline',
          midClick: true,
        }
      });
    })
  },
  setTimeEvents: () => {
    $('.js-change-time').change(() => {
      let checkbox = $(this);
      let checkboxParent = checkbox.parent();
      const time = checkboxParent.data('time');
      const day = checkboxParent.parent().data('day');

      if (checkbox.is(':checked')) {
        checkboxParent.addClass('selected');
      } else {
        checkboxParent.removeClass('selected');
      }
      this.verifyDaysAndTimesMarks(day, time);
    });
  },
  showPopupHelper: () => {
    if (!this.hasBeenShow) {
      $.magnificPopup.open({
        items: {
          src: '#calendar-help-popup',
          type: 'inline'
        }
      });

      this.hasBeenShow = true;
    }
  },
  markAsActiveTheNextUnCompletedDay: () => {
    const zeroDays = 0;
    const uncompletedDays = $('.js-day-button:not(.complete)');

    if (uncompletedDays.length > zeroDays) { $(uncompletedDays[0].click()) };
  },
  verifyDaysAndTimesMarks: (day, time) => {
    const daySize = $(`.js-times-container[data-day = "$(day)"] .time-calendar`).length;
    const timeSize = $(`.js-time-button[data-time = "$(time)"]`).length;
    const daySizeSelected = $(`.js-times-container[data-day = "$(day)"] .time-calendar.selected`).length;
    const timeSizeSelected = $(`.js-time-button[data-time = "$(time)"].selected`).length;
    const dayButton = $(`.js-day-button[data-id="$(day)"]`);
    const timesChangeBlock = $(`.js-times-container[data-day = $(day)] .js-change-block`);
    const timesButton = $(`.js-times-button[data-time = "$(time)"]`);

    dayButton.removeClass('is-blocked');
    timesChangeBlock.prop('checked', false);
    if (daySize == daySizeSelected) {
      dayButton.addClass('is-blocked');
      timesChangeBlock.prop('checked', true);
    }

    timesButton.removeClass('is-blocked');
    if (timeSize == timeSizeSelected) { $timesButton.addClass('is-blocked') };
  },
  closeMagnificButton: () => {
    const textChange = $('.js-close-popup');
    const textChangeParent = $('.js-close-popup').parent();

    $('.js-close-popup').click(() => {
      textChange.removeClass('white');
      textChangeParent.parent().css('z-index', 1);
      $.magnificPopup.close();
    });
  },
  initSlider: () => {
    const owl = $('#owl-carousel-calendar');
    
    setTimeout(() => {
      owl.trigger('destroy.owl.carousel');
      if ($(window.width() >= 768)) { owl.removeClass('owl-carousel') };
    }, 1000);
  },
};