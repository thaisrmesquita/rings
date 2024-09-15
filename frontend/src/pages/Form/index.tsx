import { Menu } from "../../components/Menu";
import * as S from "./styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRings } from "../../hooks/useRings";

export const ringSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório" }),
  power: z.string().min(1, { message: "O poder é obrigatório" }),
  carrier: z.string().min(1, { message: "O portador é obrigatório" }),
  forgedBy: z.enum(["Elves", "Dwarves", "Men", "Sauron"], {
    message: "Seleção inválida",
  }),
  image: z.string().url({ message: "A URL da imagem é inválida" }),
});

type RingFormData = z.infer<typeof ringSchema>;

export function Form() {
  const { rings, addRing, updateRing } = useRings();
  const { ringId } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RingFormData>({
    resolver: zodResolver(ringSchema),
  });

  const onSubmit = (data: RingFormData) => {
    if (ringId) {
      updateRing(Number(ringId), data);
      return;
    }
    addRing(data);
  };

  useEffect(() => {
    if (ringId) {
      const ring = rings.find((ring) => ring.id === Number(ringId));

      if (ring) {
        setValue("name", ring.name);
        setValue("power", ring.power);
        setValue("carrier", ring.carrier);
        setValue(
          "forgedBy",
          ring.forgedBy as "Elves" | "Dwarves" | "Men" | "Sauron"
        );
        setValue("image", ring.image);
      }
    }
  }, [ringId, rings, setValue]);

  return (
    <>
      <Menu />
      <S.Container>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Nome do Anel</label>
            <input {...register("name")} />
            {errors.name && (
              <p style={{ color: "red" }}>{errors.name.message}</p>
            )}
          </div>
          <div>
            <label>Poder</label>
            <input {...register("power")} />
            {errors.power && (
              <p style={{ color: "red" }}>{errors.power.message}</p>
            )}
          </div>
          <div>
            <label>Portador</label>
            <input {...register("carrier")} />
            {errors.carrier && (
              <p style={{ color: "red" }}>{errors.carrier.message}</p>
            )}
          </div>
          <div>
            <label>Forjado por</label>
            <input {...register("forgedBy")} />
            {errors.forgedBy && (
              <p style={{ color: "red" }}>{errors.forgedBy.message}</p>
            )}
          </div>
          <div>
            <label>Imagem</label>
            <input {...register("image")} />
            {errors.image && (
              <p style={{ color: "red" }}>{errors.image.message}</p>
            )}
          </div>
          <button type="submit">{ringId ? "Atualizar" : "Criar"}</button>
        </S.Form>
      </S.Container>
    </>
  );
}
