import { Card, CardContent, CardHeader } from "@/components/ui/card";
import anuglar from "@/assets/angular.png";
const TextStackComponent = () => {
  return (
    <div>
      <Card className="rounded-2xl">
        <CardHeader>
          <div className="flex items-center">
            <img src={anuglar} className="w-12 h-12" alt="angular logo" />{" "}
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
    </div>
  );
};

export default TextStackComponent;
