import { Button } from "@shared/ui";
import { TextField } from "@shared/ui/text-field";
import { TextFieldButton } from "@shared/ui/text-field/text-field-button";
import Image from "next/image";
import Link from "next/link";

export const SignUpPage = () => {
  return (
    <div className="flex h-full">
      <div className="flex-1 bg-primary flex items-center justify-center">
        <div className="flex flex-col gap-9 items-center justify-center">
          <picture>
            <Image
              width={264}
              height={200}
              src="/images/Logo.png"
              alt="DevTime 로고"
            />
          </picture>
          <span className="text-white text-title font-semibold">
            개발자를 위한 타이머
          </span>
        </div>
      </div>
      <div className="flex-1 flex justify-center w-full">
        <div className="flex flex-col items-center gap-6">
          <form className="mt-[140px] w-105 flex flex-col gap-6">
            <h2 className="text-heading text-primary text-center">회원가입</h2>

            <fieldset className="flex flex-col gap-10">
              <TextField
                label={"아이디"}
                placeholder="이메일 주소 형식으로 입력해 주세요."
                button={<TextFieldButton>중복 확인</TextFieldButton>}
                helperText={undefined}
              />
              <TextField
                label={"닉네임"}
                placeholder="닉네임을 입력해 주세요.."
                button={<TextFieldButton>중복 확인</TextFieldButton>}
                helperText={undefined}
              />
              <TextField
                label={"비밀번호"}
                type="password"
                placeholder="비밀번호를 입력해 주세요."
                helperText={undefined}
              />
              <TextField
                label={"비밀번호 확인"}
                type="password"
                placeholder="비밀번호를 다시 입력해 주세요."
                helperText={undefined}
              />
              <section>
                <div className="flex justify-between">
                  <span>이용약관</span>
                  <div>체크박스</div>
                </div>
                <div className="bg-gray-50 h-[110px] overflow-y-scroll py-3 px-4">
                  {TERMS_OF_SERVICE_CONTENT}
                </div>
              </section>
            </fieldset>

            <Button priority={"primary"}> 회원가입</Button>
          </form>

          <p>
            <span className="text-primary text-body font-medium">
              회원이신가요?
            </span>{" "}
            <Link href="/login" className="text-primary text-body font-bold ">
              로그인 바로가기
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const TERMS_OF_SERVICE_CONTENT =
  "안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕";
