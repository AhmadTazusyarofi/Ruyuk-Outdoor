import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";
import { catalogData } from "@/data/catalog";
import { toast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BookingModalProps {
  trigger?: React.ReactNode;
}

const BookingModal = ({ trigger }: BookingModalProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    startDate: "",
    duration: "",
    pickupType: "pickup",
    deliveryAddress: "",
    notes: "",
    items: {} as Record<string, number>,
  });

  const handleItemToggle = (itemId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      items: {
        ...prev.items,
        [itemId]: checked ? 1 : 0,
      },
    }));
  };

  const handleItemQuantityChange = (itemId: string, quantity: number) => {
    if (quantity < 0) return;
    setFormData((prev) => ({
      ...prev,
      items: {
        ...prev.items,
        [itemId]: quantity,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name.trim() ||
      !formData.whatsapp.trim() ||
      !formData.startDate ||
      !formData.duration
    ) {
      toast({
        title: "Form Tidak Lengkap",
        description: "Mohon isi semua field yang wajib diisi.",
        variant: "destructive",
      });
      return;
    }

    const selectedItems = Object.entries(formData.items)
      .filter(([_, qty]) => qty > 0)
      .map(([id, qty]) => {
        const item = catalogData.find((i) => i.id === id);
        return `${item?.name} (${qty}x)`;
      });

    if (selectedItems.length === 0) {
      toast({
        title: "Pilih Item",
        description: "Silakan pilih minimal satu item untuk disewa.",
        variant: "destructive",
      });
      return;
    }

    // Save to localStorage
    localStorage.setItem("ruyukBooking", JSON.stringify(formData));

    // Format WhatsApp message
    const nomorToko = "6281234567890"; // Replace with actual store WhatsApp number
    const pesan = `Halo Ruyuk Outdoor, saya ingin booking:

Nama: ${formData.name}
WA: ${formData.whatsapp}
Tanggal: ${formData.startDate} • Durasi: ${formData.duration} hari

Item:
${selectedItems.join("\n")}

Pengambilan: ${
      formData.pickupType === "pickup" ? "Pickup di Store" : "Delivery"
    }
${
  formData.pickupType === "delivery"
    ? `Alamat: ${formData.deliveryAddress}`
    : ""
}

${formData.notes ? `Catatan: ${formData.notes}` : ""}`;

    const url = `https://wa.me/${nomorToko}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");

    toast({
      title: "Berhasil!",
      description: "Anda akan diarahkan ke WhatsApp untuk melanjutkan booking.",
    });

    setOpen(false);

    // Reset form
    setFormData({
      name: "",
      whatsapp: "",
      startDate: "",
      duration: "",
      pickupType: "pickup",
      deliveryAddress: "",
      notes: "",
      items: {},
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" className="shadow-lg">
            <MessageCircle className="w-5 h-5 mr-2" />
            Booking Sekarang
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-6">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-bold">
                Form Booking
              </DialogTitle>
              <DialogDescription>
                Isi form di bawah untuk melakukan booking via WhatsApp
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="modal-name">Nama Lengkap *</Label>
                  <Input
                    id="modal-name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="modal-whatsapp">Nomor WhatsApp *</Label>
                  <Input
                    id="modal-whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        whatsapp: e.target.value,
                      }))
                    }
                    placeholder="08xxxxxxxxxx"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="modal-startDate">Tanggal Mulai *</Label>
                  <Input
                    id="modal-startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        startDate: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="modal-duration">Durasi (hari) *</Label>
                  <Input
                    id="modal-duration"
                    type="number"
                    min="1"
                    value={formData.duration}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        duration: e.target.value,
                      }))
                    }
                    placeholder="1"
                    required
                  />
                </div>
              </div>

              <div>
                <Label className="mb-3 block">Pilih Item *</Label>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-2 border rounded-lg p-3 bg-muted/20">
                  {catalogData.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-2 rounded-lg bg-background"
                    >
                      <Checkbox
                        id={`modal-${item.id}`}
                        checked={formData.items[item.id] > 0}
                        onCheckedChange={(checked) =>
                          handleItemToggle(item.id, checked as boolean)
                        }
                      />
                      <Label
                        htmlFor={`modal-${item.id}`}
                        className="flex-1 cursor-pointer text-sm"
                      >
                        {item.name}
                      </Label>
                      {formData.items[item.id] > 0 && (
                        <Input
                          type="number"
                          min="1"
                          value={formData.items[item.id]}
                          onChange={(e) =>
                            handleItemQuantityChange(
                              item.id,
                              parseInt(e.target.value) || 0
                            )
                          }
                          className="w-16 h-8"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="modal-pickupType">Lokasi Pengambilan *</Label>
                <Select
                  value={formData.pickupType}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, pickupType: value }))
                  }
                >
                  <SelectTrigger id="modal-pickupType">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pickup">Pickup di Store</SelectItem>
                    <SelectItem value="delivery">Delivery</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.pickupType === "delivery" && (
                <div>
                  <Label htmlFor="modal-deliveryAddress">
                    Alamat Pengiriman
                  </Label>
                  <Textarea
                    id="modal-deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        deliveryAddress: e.target.value,
                      }))
                    }
                    placeholder="Masukkan alamat lengkap"
                    rows={2}
                  />
                </div>
              )}

              <div>
                <Label htmlFor="modal-notes">Catatan Tambahan</Label>
                <Textarea
                  id="modal-notes"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, notes: e.target.value }))
                  }
                  placeholder="Informasi tambahan atau pertanyaan"
                  rows={2}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                  className="
    flex-1
    relative overflow-hidden isolate
    before:-z-10
  "
                >
                  Batal
                </Button>

                <Button type="submit" className="flex-1">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Kirim via WhatsApp
                </Button>
              </div>
            </form>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
