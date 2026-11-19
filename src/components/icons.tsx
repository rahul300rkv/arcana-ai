import { forwardRef, type SVGProps, type ComponentType } from "react";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
  Activity01Icon,
  Alert02Icon,
  ArrowDown02Icon,
  ArrowLeft02Icon,
  ArrowRight02Icon,
  ArrowUpRight01Icon,
  Award01Icon,
  BookHeartIcon,
  BookOpen01Icon,
  BookOpen02Icon,
  Briefcase01Icon,
  Briefcase02Icon,
  BulbIcon,
  Calculator01Icon,
  Calendar01Icon,
  Calendar03Icon,
  Calendar04Icon,
  Cancel01Icon,
  CheckListIcon,
  CheckmarkCircle02Icon,
  ChevronDownIcon as HugeChevronDownIcon,
  ChevronLeftIcon as HugeChevronLeftIcon,
  ChevronRightIcon as HugeChevronRightIcon,
  ChevronUpIcon,
  CircleIcon,
  Clock01Icon,
  CloverIcon,
  Coins01Icon,
  Compass01Icon,
  Delete02Icon,
  DragDropVerticalIcon,
  DropletsIcon,
  EyeIcon,
  FastWindIcon,
  FavouriteIcon,
  FireIcon,
  Globe02Icon,
  GridViewIcon,
  HandHeartIcon,
  HashtagIcon,
  HelpCircleIcon,
  Home01Icon,
  HourglassIcon,
  JusticeScale01Icon,
  Layers01Icon,
  Link01Icon,
  MagicWand01Icon,
  Mail01Icon,
  Menu01Icon,
  Message01Icon,
  MinusSignIcon,
  Moon02Icon,
  MoreHorizontalIcon,
  Mortarboard01Icon,
  NoteEditIcon,
  Notification02Icon,
  PaintBoardIcon,
  PlusSignIcon,
  RefreshIcon,
  RotateLeft01Icon,
  Route01Icon,
  Search01Icon,
  SecurityCheckIcon,
  SentIcon,
  Settings02Icon,
  Share08Icon,
  Shield01Icon,
  ShieldEnergyIcon,
  ShuffleIcon,
  SidebarLeftIcon,
  SparkleIcon,
  SparklesIcon,
  SquareLock01Icon,
  StarIcon,
  Sun03Icon,
  Tick02Icon,
  Timer02Icon,
  UserCircleIcon,
  UserIcon,
  UserMultipleIcon,
  WavingHand01Icon,
  ZapIcon,
} from "@hugeicons/core-free-icons";

export interface AppIconProps extends Omit<SVGProps<SVGSVGElement>, "strokeWidth"> {
  size?: string | number;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

export type AppIcon = ComponentType<AppIconProps>;

function wrapIcon(iconData: IconSvgElement, displayName: string): AppIcon {
  const Wrapped = forwardRef<SVGSVGElement, AppIconProps>(
    ({ size = 24, strokeWidth, absoluteStrokeWidth, ...rest }, ref) => (
      <HugeiconsIcon
        ref={ref}
        icon={iconData}
        size={size}
        strokeWidth={strokeWidth}
        absoluteStrokeWidth={absoluteStrokeWidth}
        {...rest}
      />
    ),
  );
  Wrapped.displayName = displayName;
  return Wrapped;
}

export const AlertTriangle = wrapIcon(Alert02Icon, "AlertTriangle");
export const ArrowDown = wrapIcon(ArrowDown02Icon, "ArrowDown");
export const ArrowLeft = wrapIcon(ArrowLeft02Icon, "ArrowLeft");
export const ArrowRight = wrapIcon(ArrowRight02Icon, "ArrowRight");
export const ArrowUpRight = wrapIcon(ArrowUpRight01Icon, "ArrowUpRight");
export const Award = wrapIcon(Award01Icon, "Award");
export const Bell = wrapIcon(Notification02Icon, "Bell");
export const BookHeart = wrapIcon(BookHeartIcon, "BookHeart");
export const BookOpen = wrapIcon(BookOpen01Icon, "BookOpen");
export const BookOpenText = wrapIcon(BookOpen02Icon, "BookOpenText");
export const Briefcase = wrapIcon(Briefcase01Icon, "Briefcase");
export const BriefcaseBusiness = wrapIcon(Briefcase02Icon, "BriefcaseBusiness");
export const Calculator = wrapIcon(Calculator01Icon, "Calculator");
export const Calendar = wrapIcon(Calendar01Icon, "Calendar");
export const CalendarClock = wrapIcon(Calendar03Icon, "CalendarClock");
export const CalendarDays = wrapIcon(Calendar04Icon, "CalendarDays");
export const Check = wrapIcon(Tick02Icon, "Check");
export const CheckCircle2 = wrapIcon(CheckmarkCircle02Icon, "CheckCircle2");
export const ChevronDown = wrapIcon(HugeChevronDownIcon, "ChevronDown");
export const ChevronDownIcon = wrapIcon(HugeChevronDownIcon, "ChevronDownIcon");
export const ChevronLeft = wrapIcon(HugeChevronLeftIcon, "ChevronLeft");
export const ChevronLeftIcon = wrapIcon(HugeChevronLeftIcon, "ChevronLeftIcon");
export const ChevronRight = wrapIcon(HugeChevronRightIcon, "ChevronRight");
export const ChevronRightIcon = wrapIcon(HugeChevronRightIcon, "ChevronRightIcon");
export const ChevronUp = wrapIcon(ChevronUpIcon, "ChevronUp");
export const Circle = wrapIcon(CircleIcon, "Circle");
export const Clock = wrapIcon(Clock01Icon, "Clock");
export const Clover = wrapIcon(CloverIcon, "Clover");
export const Coins = wrapIcon(Coins01Icon, "Coins");
export const Compass = wrapIcon(Compass01Icon, "Compass");
export const Cross = wrapIcon(PlusSignIcon, "Cross");
export const Droplets = wrapIcon(DropletsIcon, "Droplets");
export const Eye = wrapIcon(EyeIcon, "Eye");
export const Flame = wrapIcon(FireIcon, "Flame");
export const Globe = wrapIcon(Globe02Icon, "Globe");
export const GraduationCap = wrapIcon(Mortarboard01Icon, "GraduationCap");
export const GripVertical = wrapIcon(DragDropVerticalIcon, "GripVertical");
export const Hand = wrapIcon(WavingHand01Icon, "Hand");
export const Hash = wrapIcon(HashtagIcon, "Hash");
export const Heart = wrapIcon(FavouriteIcon, "Heart");
export const HeartHandshake = wrapIcon(HandHeartIcon, "HeartHandshake");
export const HeartPulse = wrapIcon(Activity01Icon, "HeartPulse");
export const HelpCircle = wrapIcon(HelpCircleIcon, "HelpCircle");
export const Home = wrapIcon(Home01Icon, "Home");
export const Hourglass = wrapIcon(HourglassIcon, "Hourglass");
export const Layers = wrapIcon(Layers01Icon, "Layers");
export const LayoutGrid = wrapIcon(GridViewIcon, "LayoutGrid");
export const Lightbulb = wrapIcon(BulbIcon, "Lightbulb");
export const Link2 = wrapIcon(Link01Icon, "Link2");
export const ListChecks = wrapIcon(CheckListIcon, "ListChecks");
export const Lock = wrapIcon(SquareLock01Icon, "Lock");
export const Mail = wrapIcon(Mail01Icon, "Mail");
export const Menu = wrapIcon(Menu01Icon, "Menu");
export const MessageSquare = wrapIcon(Message01Icon, "MessageSquare");
export const Minus = wrapIcon(MinusSignIcon, "Minus");
export const Moon = wrapIcon(Moon02Icon, "Moon");
export const MoonStar = wrapIcon(Moon02Icon, "MoonStar");
export const MoreHorizontal = wrapIcon(MoreHorizontalIcon, "MoreHorizontal");
export const NotebookPen = wrapIcon(NoteEditIcon, "NotebookPen");
export const Palette = wrapIcon(PaintBoardIcon, "Palette");
export const PanelLeft = wrapIcon(SidebarLeftIcon, "PanelLeft");
export const RefreshCw = wrapIcon(RefreshIcon, "RefreshCw");
export const RotateCcw = wrapIcon(RotateLeft01Icon, "RotateCcw");
export const Route = wrapIcon(Route01Icon, "Route");
export const Scale = wrapIcon(JusticeScale01Icon, "Scale");
export const Search = wrapIcon(Search01Icon, "Search");
export const Send = wrapIcon(SentIcon, "Send");
export const Settings = wrapIcon(Settings02Icon, "Settings");
export const Share2 = wrapIcon(Share08Icon, "Share2");
export const Shield = wrapIcon(Shield01Icon, "Shield");
export const ShieldCheck = wrapIcon(ShieldEnergyIcon, "ShieldCheck");
export const ShieldQuestion = wrapIcon(SecurityCheckIcon, "ShieldQuestion");
export const Shuffle = wrapIcon(ShuffleIcon, "Shuffle");
export const Sparkle = wrapIcon(SparkleIcon, "Sparkle");
export const Sparkles = wrapIcon(SparklesIcon, "Sparkles");
export const Star = wrapIcon(StarIcon, "Star");
export const Sun = wrapIcon(Sun03Icon, "Sun");
export const Timer = wrapIcon(Timer02Icon, "Timer");
export const Trash2 = wrapIcon(Delete02Icon, "Trash2");
export const User = wrapIcon(UserIcon, "User");
export const UserRound = wrapIcon(UserCircleIcon, "UserRound");
export const Users = wrapIcon(UserMultipleIcon, "Users");
export const Wand2 = wrapIcon(MagicWand01Icon, "Wand2");
export const Wind = wrapIcon(FastWindIcon, "Wind");
export const X = wrapIcon(Cancel01Icon, "X");
export const Zap = wrapIcon(ZapIcon, "Zap");
