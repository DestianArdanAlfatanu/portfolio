import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import alert from 'pixelarticons/svg/alert.svg?raw';
import arrowLeft from 'pixelarticons/svg/arrow-left.svg?raw';
import arrowRight from 'pixelarticons/svg/arrow-right.svg?raw';
import arrowUp from 'pixelarticons/svg/arrow-up.svg?raw';
import bookOpen from 'pixelarticons/svg/book-open.svg?raw';
import briefcase from 'pixelarticons/svg/briefcase.svg?raw';
import building from 'pixelarticons/svg/building.svg?raw';
import calendar from 'pixelarticons/svg/calendar.svg?raw';
import chat from 'pixelarticons/svg/chat.svg?raw';
import check from 'pixelarticons/svg/check.svg?raw';
import checklist from 'pixelarticons/svg/checklist.svg?raw';
import clock from 'pixelarticons/svg/clock.svg?raw';
import close from 'pixelarticons/svg/close.svg?raw';
import code from 'pixelarticons/svg/code.svg?raw';
import deviceLaptop from 'pixelarticons/svg/device-laptop.svg?raw';
import download from 'pixelarticons/svg/download.svg?raw';
import externalLink from 'pixelarticons/svg/external-link.svg?raw';
import file from 'pixelarticons/svg/file.svg?raw';
import flag from 'pixelarticons/svg/flag.svg?raw';
import folder from 'pixelarticons/svg/folder.svg?raw';
import github from 'pixelarticons/svg/github.svg?raw';
import heart from 'pixelarticons/svg/heart.svg?raw';
import home from 'pixelarticons/svg/home.svg?raw';
import image from 'pixelarticons/svg/image.svg?raw';
import infoBox from 'pixelarticons/svg/info-box.svg?raw';
import lightbulb from 'pixelarticons/svg/lightbulb.svg?raw';
import link from 'pixelarticons/svg/link.svg?raw';
import mail from 'pixelarticons/svg/mail.svg?raw';
import map from 'pixelarticons/svg/map.svg?raw';
import menu from 'pixelarticons/svg/menu.svg?raw';
import plus from 'pixelarticons/svg/plus.svg?raw';
import search from 'pixelarticons/svg/search.svg?raw';
import server from 'pixelarticons/svg/server.svg?raw';
import sliders from 'pixelarticons/svg/sliders.svg?raw';
import user from 'pixelarticons/svg/user.svg?raw';
import users from 'pixelarticons/svg/users.svg?raw';
import zap from 'pixelarticons/svg/zap.svg?raw';

// Only the icons in use are imported, so the rest of the set is not bundled.
// pixelarticons (MIT) draws with fill="currentColor", so icons inherit text color.
const icons = {
  alert, arrowLeft, arrowRight, arrowUp, bookOpen, briefcase, building, calendar,
  chat, check, checklist, clock, close, code, deviceLaptop, download, externalLink,
  file, flag, folder, github, heart, home, image, infoBox, lightbulb, link, mail,
  map, menu, plus, search, server, sliders, user, users, zap,
};

const PixelIcon = memo(({ name, size = 24, className, ...rest }) => {
  const svg = icons[name];
  if (!svg) return null;

  return (
    <span
      aria-hidden="true"
      className={cn('inline-block shrink-0 [&>svg]:w-full [&>svg]:h-full', className)}
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: svg }}
      {...rest}
    />
  );
});

PixelIcon.displayName = 'PixelIcon';

export default PixelIcon;
