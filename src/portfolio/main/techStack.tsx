import { Card, CardContent, CardHeader } from "@/components/ui/card";
import angular from "@/assets/angular.png";
import react from "@/assets/react.svg";
import tailwind from "@/assets/tailwind.png";
const TextStackComponent = () => {
  return (
    <div className="flex gap-2 flex-col">
      <Card className="">
        <CardHeader>
          <div className="flex items-center">
            <img src={angular} className="w-12 h-12" alt="angular logo" />{" "}
            Angular
          </div>
        </CardHeader>
        <CardContent className="px-10">
          <li>Component, Directive, Pipe</li>
          <li>Security, AuthGuard, Interceptor, CanActivate</li>
          <li>Material UI, Prime</li>
          <li>NGRX, RxJS, Signal </li>
          <li>Dependency Injection</li>
          <li>Lazy Laoding</li>
          <li>SSO</li>
        </CardContent>
      </Card>
      <Card className="">
        <CardHeader>
          <div className="flex items-center gap-2">
            <img src={react} className="w-12 h-12" alt="angular logo" /> React
          </div>
        </CardHeader>
        <CardContent className="px-10">
          <li>React Hook, Custom Hook</li>
          <li>MUI, Shadcn UI</li>
          <li>React Form Hook</li>
          <li>React Router Dom</li>
          <li>Zustand, Redux, RTK query, Axios</li>
        </CardContent>
      </Card>
      <Card className="">
        <CardHeader>
          <div className="flex items-center gap-2">
            <img src={tailwind} className="w-11 h-7" alt="angular logo" />{" "}
            Tailwind CSS
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default TextStackComponent;
